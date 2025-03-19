// src/services/ErrorService.js
import { TRANSLATION_ERRORS, CONFIG } from "../config.js";
import NotificationManager from "../managers/NotificationManager.js";

export class ErrorTypes {
  static API = "API";
  static NETWORK = "NETWORK";
  static SERVICE = "SERVICE";
  static VALIDATIONMODEL = "VALIDATIONMODEL";
  static CONTEXT = "CONTEXT";
  static UI = "UI";
}

export class ErrorHandler {
  constructor(notificationManager = new NotificationManager()) {
    this.notifier = notificationManager;
    this.displayedErrors = new Set();
    this.isHandling = false; // فلگ برای جلوگیری از هندلینگ چندباره در یک چرخه
  }

  handle(error, meta = {}) {
    if (this.isHandling) {
      console.debug(
        "[ErrorHandler] Ignoring subsequent error in the same flow:",
        error
      );
      return error;
    }
    this.isHandling = true;

    // نرمال‌سازی خطا در صورتی که از نوع Error نباشد
    if (!(error instanceof Error)) {
      error = new Error(String(error));
    }

    // **بررسی و بازبینی نوع خطا بر اساس محتوای خطا**
    let { type, statusCode, element } = meta;
    if (error.message.includes("Extension context invalidated")) {
      type = ErrorTypes.CONTEXT;
    }

    const message = this._getErrorMessage(error, type, statusCode);

    this._logError(error, meta);

    if (!this.notifier) {
      console.error(
        "[ErrorHandler] Notifier is undefined. Cannot notify user."
      );
      this.isHandling = false;
      return error;
    }

    this._notifyUser(message, type, element);

    this.isHandling = false; // ریست کردن فلگ بعد از هندلینگ
    return error;
  }

  _getErrorMessage(error, type, statusCode) {
    const errorMap = {
      [ErrorTypes.API]: {
        400: "کلید API نامعتبر است",
        401: TRANSLATION_ERRORS.MISSING_API_KEY,
        403: "کلید API نامعتبر است",
        429: TRANSLATION_ERRORS.SERVICE_OVERLOADED,
        500: "خطای داخلی سرور",
        default: "خطای سرویس API",
      },
      [ErrorTypes.NETWORK]: {
        default: TRANSLATION_ERRORS.NETWORK_FAILURE,
      },
      [ErrorTypes.SERVICE]: {
        503: "سرویس موقتاً در دسترس نیست",
        default: "خطای سرویس ترجمه",
      },
      [ErrorTypes.CONTEXT]: {
        default: "لطفا صفحه را رفرش کنید.",
      },
      [ErrorTypes.UI]: {
        default: "خطای سیستمی رخ داده است",
      },
      [ErrorTypes.VALIDATIONMODEL]: {
        default: "خطا در مدلِ انتخاب شده",
      },
    };

    if (type && errorMap[type]) {
      return errorMap[type][statusCode] || errorMap[type].default;
    }

    // در صورت نداشتن نوع مشخص از پیام اصلی خطا استفاده می‌شود
    return error.message || "خطای ناشناخته رخ داده است";
  }

  _logError(error, meta) {
    // چاپ نام و پیام خطا به همراه متادیتا و استک (در صورت وجود) برای دیباگ
    console.error(`[ErrorHandler] ${error.name}: ${error.message}`, meta);
    if (error.stack) {
      console.error(error.stack);
    }
  }

  _notifyUser(message, type, element) {
    // جلوگیری از نمایش خطاهای تکراری به مدت زمان مشخص
    if (this.displayedErrors.has(message)) return;

    const notificationType = this._getNotificationType(type);
    this.notifier.show(message, notificationType, true, 5000);
    this.displayedErrors.add(message);

    setTimeout(() => this.displayedErrors.delete(message), 5000);
  }

  _getNotificationType(errorType) {
    const typeMap = {
      [ErrorTypes.UI]: "error",
      [ErrorTypes.API]: "error",
      [ErrorTypes.NETWORK]: "warning",
      [ErrorTypes.SERVICE]: "error",
      [ErrorTypes.CONTEXT]: "warning",
      [ErrorTypes.VALIDATIONMODEL]: "warning",
    };

    return typeMap[errorType] || "error";
  }
}
