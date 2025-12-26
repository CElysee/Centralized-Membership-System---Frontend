// Simple console-based logger
// No external dependencies required

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private formatMessage(level: LogLevel, message: string, meta?: any): string {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    return `${prefix} ${message}`;
  }

  private log(level: LogLevel, message: string, meta?: any) {
    const formattedMessage = this.formatMessage(level, message);

    if (meta) {
      console[level === 'debug' ? 'log' : level](formattedMessage, meta);
    } else {
      console[level === 'debug' ? 'log' : level](formattedMessage);
    }
  }

  debug(message: string, meta?: any) {
    if (process.env.NODE_ENV !== 'production') {
      this.log('debug', message, meta);
    }
  }

  info(message: string, meta?: any) {
    this.log('info', message, meta);
  }

  warn(message: string, meta?: any) {
    this.log('warn', message, meta);
  }

  error(message: string, meta?: any) {
    this.log('error', message, meta);
  }
}

const logger = new Logger();
export default logger;
