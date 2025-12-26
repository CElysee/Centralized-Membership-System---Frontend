// Simple error handler using console logging
// No external dependencies required

import logger from './logger';

export interface ErrorInfo {
  message: string;
  stack?: string;
  context?: Record<string, any>;
  timestamp: string;
}

class ErrorHandler {
  captureError(error: Error | unknown, context?: Record<string, any>) {
    const errorInfo: ErrorInfo = {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      context,
      timestamp: new Date().toISOString(),
    };

    logger.error('Error captured', errorInfo);
    return errorInfo;
  }

  captureWarning(message: string, context?: Record<string, any>) {
    logger.warn(message, { context, timestamp: new Date().toISOString() });
  }

  captureInfo(message: string, context?: Record<string, any>) {
    logger.info(message, { context, timestamp: new Date().toISOString() });
  }
}

export const errorHandler = new ErrorHandler();
export default errorHandler;
