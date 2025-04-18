// src/strategies/InstagramStrategy.js
import { ErrorTypes } from "../services/ErrorService";
import { CONFIG } from "../config.js";
import PlatformStrategy from "./PlatformStrategy.js";
import { delay } from "../utils/helpers";

export default class InstagramStrategy extends PlatformStrategy {
  constructor(notifier, errorHandler) {
    super(notifier);
    this.errorHandler = errorHandler;
  }

  /**
   * بررسی می‌کند که آیا المان، فیلد متنی دایرکت مسیج اینستاگرام است یا خیر.
   * @param {HTMLElement} element - المان برای بررسی.
   * @returns {boolean} - اگر المان فیلد دایرکت مسیج باشد true برمی‌گرداند.
   */
  isDirectMessageInputField(element) {
    return !!(
      element && element.matches('div[role="textbox"][contenteditable="true"]')
    );
  }

  async updateElement(element, translatedText) {
    try {
      // بررسی اگر المان، فیلد متنی دایرکت مسیج باشد
      if (this.isDirectMessageInputField(element)) {
        await this.clearContent(element);
        await this.pasteText(element, translatedText);
        this.triggerStateUpdate(element);
        this.applyVisualFeedback(element);
      } else if (element.isContentEditable) {
        element.innerHTML = translatedText;
        this.applyTextDirection(element, translatedText);
        this.applyVisualFeedback(element);
      } else {
        element.value = translatedText;
        this.applyTextDirection(element, translatedText);
        this.applyVisualFeedback(element);
      }
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.UI,
        context: "instagram-strategy-updateElement",
      });
    }
  }

  async clearContent(element) {
    if (!element) return;

    try {
      await this.safeFocus(element); // فوکوس کردن روی المان
      await this.selectAllContent(element); // انتخاب تمام محتوا
      await this.simulatePaste(element, ""); // پیست کردن متن خالی برای پاک کردن
      await delay(50); // کمی تاخیر برای پردازش
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.UI,
        context: "instagram-strategy-clearContent",
      });
    }
  }

  async pasteText(target, text) {
    if (!target) return;

    try {
      const dt = new DataTransfer();
      dt.setData("text/plain", text);
      dt.setData("text/html", text.replace(/\n/g, "<br>"));

      const pasteEvent = new ClipboardEvent("paste", {
        bubbles: true,
        cancelable: true,
        clipboardData: dt,
      });
      target.dispatchEvent(pasteEvent);
      await delay(50); // کمی تاخیر برای پردازش رویداد
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.UI,
        context: "instagram-strategy-pasteText",
      });
    }
  }

  extractText(target) {
    if (target.isContentEditable) {
      return target.innerText.trim();
    }
    return target.value || target.textContent.trim();
  }

  async safeFocus(element) {
    try {
      element.focus({ preventScroll: true });
      await delay(100);
      return element;
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.UI,
        context: "instagram-strategy-safeFocus",
      });
    }
  }

  async selectAllContent(element) {
    try {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
      await delay(100);
    } catch (error) {
      this.errorHandler.handle(error, {
        type: ErrorTypes.UI,
        context: "instagram-strategy-selectAllContent",
      });
    }
    return element;
  }

  async simulatePaste(element, text) {
    const dt = new DataTransfer();
    dt.setData("text/plain", text);
    dt.setData("text/html", text.replace(/\n/g, "<br>"));

    const pasteEvent = new ClipboardEvent("paste", {
      bubbles: true,
      cancelable: true,
      clipboardData: dt,
    });

    element.dispatchEvent(pasteEvent);
    await delay(50);
  }

  triggerStateUpdate(element) {
    element.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        composed: true,
      })
    );
  }
}
