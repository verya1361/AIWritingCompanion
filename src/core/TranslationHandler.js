// src/core/TranslationHandler.js
import WhatsAppStrategy from "../strategies/WhatsAppStrategy.js";
import InstagramStrategy from "../strategies/InstagramStrategy.js";
import TwitterStrategy from "../strategies/TwitterStrategy.js";
import TelegramStrategy from "../strategies/TelegramStrategy.js";
import MediumStrategy from "../strategies/MediumStrategy.js";
import ChatGPTStrategy from "../strategies/ChatGPTStrategy.js";
import YoutubeStrategy from "../strategies/YoutubeStrategy.js";
import DefaultStrategy from "../strategies/DefaultStrategy.js";
import DiscordStrategy from "../strategies/DiscordStrategy.js";
import NotificationManager from "../managers/NotificationManager.js";
import IconManager from "../managers/IconManager.js";
import { debounce } from "../utils/debounce.js";
import { state, TranslationMode, TRANSLATION_ERRORS } from "../config.js";
import { translateText } from "../utils/api.js";
import { logMethod, isExtensionContextValid, logME } from "../utils/helpers.js";
import {
  detectPlatform,
  detectPlatformByURL,
  Platform,
} from "../utils/platformDetector.js";
import EventHandler from "./EventHandler.js";
import { ErrorHandler, ErrorTypes } from "../services/ErrorService.js";

/**
 * Handles translation requests from content script in a CSP-safe background context.
 * Used by SelectionWindows and Select Element handlers.
 *
 * @param {object} message - Message sent from content script.
 * @param {object} sender - Sender object from the runtime.onMessage listener.
 * @param {function} sendResponse - Function to send the result back.
 * @param {function} translateText - Translation method from api.js
 * @param {ErrorHandler} errorHandler - Centralized error handler instance
 */
export async function handleFetchTranslationBackground(
  message,
  sender,
  sendResponse,
  translateText,
  errorHandler
) {
  try {
    const { promptText, translationMode, sourceLang, targetLang } =
      message.payload || {};

    if (!promptText || typeof promptText !== "string") {
      throw new Error("Invalid or missing promptText.");
    }

    const translated = await translateText(
      promptText,
      translationMode,
      sourceLang,
      targetLang
    );

    if (!translated) {
      sendResponse({
        success: false,
        error: "Empty or null translation received.",
      });
      return;
    }

    sendResponse({
      success: true,
      data: {
        translatedText: translated,
      },
    });
  } catch (error) {
    const processedError = await ErrorHandler.processError(error);
    await errorHandler.handle(processedError, {
      type: processedError.type || ErrorTypes.SERVICE,
      context: "handler-fetchTranslationBackground",
    });

    sendResponse({
      success: false,
      error: processedError.message || "Translation failed.",
    });
  }
}

export default class TranslationHandler {
  constructor() {
    // ابتدا notifier را ایجاد می‌کنیم تا برای ErrorHandler موجود باشد
    this.notifier = new NotificationManager();
    this.errorHandler = new ErrorHandler(this.notifier);
    this.ErrorTypes = ErrorTypes;
    this.handleEvent = debounce(this.handleEvent.bind(this), 300);

    this.strategies = {
      [Platform.WhatsApp]: new WhatsAppStrategy(
        this.notifier,
        this.errorHandler
      ),
      [Platform.Instagram]: new InstagramStrategy(
        this.notifier,
        this.errorHandler
      ),
      [Platform.Medium]: new MediumStrategy(this.notifier, this.errorHandler),
      [Platform.Telegram]: new TelegramStrategy(
        this.notifier,
        this.errorHandler
      ),
      [Platform.Twitter]: new TwitterStrategy(this.notifier, this.errorHandler),
      [Platform.ChatGPT]: new ChatGPTStrategy(this.notifier, this.errorHandler),
      [Platform.Youtube]: new YoutubeStrategy(this.notifier, this.errorHandler),
      [Platform.Default]: new DefaultStrategy(this.notifier, this.errorHandler),
      [Platform.Discord]: new DiscordStrategy(this.notifier, this.errorHandler),
    };

    this.validateStrategies();
    this.IconManager = new IconManager(this.errorHandler);
    this.displayedErrors = new Set();
    this.isProcessing = false;
    this.select_Element_ModeActive = false;
    this.eventHandler = new EventHandler(this);
  }

  @logMethod
  reinitialize() {
    logME(
      "[TranslationHandler] Reinitializing TranslationHandler state after update..."
    );
    this.isProcessing = false;
    this.select_Element_ModeActive = false;
    // در صورت نیاز، متغیرهای داخلی دیگر مانند caches یا stateهای دیگر را هم ریست کنید
    // برای مثال:
    // state.originalTexts.clear();
    // this.IconManager.cleanup();
  }

  /**
   * Main event handler router
   */
  @logMethod
  async handleEvent(event) {
    try {
      await this.eventHandler.handleEvent(event);
    } catch (error) {
      throw await this.errorHandler.handle(error, {
        type: error.type || ErrorTypes.UI,
        context: "handleEvent",
        eventType: event.type,
      });
    }
  }

  @logMethod
  handleError(error, meta = {}) {
    try {
      const normalizedError =
        error instanceof Error ? error : new Error(String(error));

      this.errorHandler.handle(normalizedError, {
        ...meta,
        origin: "TranslationHandler",
      });
    } catch (error) {
      logME("[TranslationHandler] Error handling failed:", error);
      throw this.errorHandler.handle(error, {
        type: ErrorTypes.UI,
        context: "TranslationHandler-handleError",
      });
    }
  }

  handleEditableFocus(element) {
    this.eventHandler.handleEditableFocus(element);
  }

  handleEditableBlur() {
    this.eventHandler.handleEditableBlur();
  }

  handleEscape(event) {
    this.eventHandler.handleEscape(event);
  }

  async handleCtrlSlash(event) {
    await this.eventHandler.handleCtrlSlash(event);
  }

  async handleEditableElement(event) {
    await this.eventHandler.handleEditableElement(event);
  }

  @logMethod
  async processTranslation_with_CtrlSlash(params) {
    const statusNotification = this.notifier.show("در حال ترجمه...", "status");
    try {
      if (!isExtensionContextValid()) {
        this.errorHandler.handle(
          new Error(TRANSLATION_ERRORS.INVALID_CONTEXT),
          {
            type: ErrorTypes.CONTEXT,
            context: "TranslationHandler-processTranslation-context",
            code: "context-invalid",
            statusCode: "context-invalid",
          }
        );
        return;

        // OR
        // throw new Error(
        //   "TranslationHandler: Translation failed: Context Invalid",
        //   {
        //     type: ErrorTypes.CONTEXT,
        //     translationParams: params,
        //   }
        // );
      }

      // if (!params.text || !params.target) {
      //   console.warn("[TranslationHandler] Invalid parameter", params);
      //   throw new Error("TranslationHandler: Translation failed, Invalid parameter", {
      //     type: ErrorTypes.CONTEXT,
      //     translationParams: params,
      //   });
      // }

      const platform =
        params.target ? detectPlatform(params.target) : detectPlatformByURL();

      state.translateMode =
        params.selectionRange ?
          TranslationMode.SelectElement
        : TranslationMode.Field;

      const translated = await translateText(
        params.text,
        TranslationMode.Field
      );
      if (!translated) {
        return;
      }

      // اگر کاربر متنی را انتخاب کرده باشد، آن را ترجمه کن
      if (params.selectionRange) {
        this.handleSelect_ElementTranslation(platform, params, translated);
      }
      // در غیر این صورت، ترجمه را در عنصر هدف نمایش بده
      else if (params.target) {
        this.updateTargetElement(params.target, translated);
      }
    } catch (error) {
      // TODO: Requires further review, possible bug detected
      error = await ErrorHandler.processError(error);

      // هندل اولیه خطا توسط ErrorHandler (instance)
      const handlerError = await this.errorHandler.handle(error, {
        type: error.type || ErrorTypes.CONTEXT,
        context: "TranslationHandler-processTranslation",
        translationParams: params,
        isPrimary: true,
      });

      // اگر خطا به عنوان نهایی علامت‌گذاری شده باشد، دیگر نیازی به throw نیست
      if (handlerError.isFinal || handlerError.suppressSecondary) {
        return; // یا می‌توانید null برگردانید
      }

      const finalError = new Error(handlerError.message);
      Object.assign(finalError, {
        type: handlerError.type,
        statusCode: handlerError.statusCode,
        isFinal: true,
        originalError: error,
      });

      throw finalError;
    } finally {
      if (statusNotification) {
        this.notifier.dismiss(statusNotification);
      }
    }
  }

  /**
   * اعتبارسنجی استراتژیها
   */
  async validateStrategies() {
    try {
      Object.entries(this.strategies).forEach(([name, strategy]) => {
        if (typeof strategy.extractText !== "function") {
          throw new Error(
            `استراتژی ${name} متد extractText را پیاده‌سازی نکرده است`
          );
        }
      });
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.INTEGRATION,
        context: "strategy-validation",
      });
    }
  }

  @logMethod
  async handleSelect_ElementTranslation(platform, params, translated) {
    try {
      if (typeof translated !== "string" && !translated) {
        return;
      }
      if (this.strategies[platform]?.updateElement) {
        await this.strategies[platform].updateElement(
          params.selectionRange,
          translated
        );
      } else {
        this.errorHandler.handle(
          new Error(`متد updateElement برای ${platform} تعریف نشده`),
          {
            type: ErrorTypes.UI,
            context: "select-element-translation-updateElement",
            platform: platform,
          }
        );
      }
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.SERVICE,
        context: "select-element-translation",
        platform: platform,
      });
    }
  }

  @logMethod
  async updateTargetElement(target, translated) {
    try {
      if (typeof translated === "string" && translated) {
        const platform = detectPlatform(target);
        await this.strategies[platform].updateElement(target, translated);
      }
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.SERVICE,
        context: "update-target-element",
        platform: detectPlatform(target),
      });
    }
  }

  getSelectElementContext() {
    return {
      select_element: window.getSelection(),
      activeElement: document.activeElement,
    };
  }

  extractFromActiveElement(element) {
    const platform = detectPlatform(element);
    return this.strategies[platform].extractText(element);
  }

  @logMethod
  pasteContent(element, content) {
    try {
      const platform = detectPlatform(element);
      this.strategies[platform].pasteContent(element, content);
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.UI,
        context: "paste-content",
        platform: detectPlatform(element),
      });
    }
  }
}
