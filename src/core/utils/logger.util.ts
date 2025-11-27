import { formatDate } from './date.util';
import { app } from './app.util';

const log = console.log;
const error = console.error;

// Simple color functions simulating minimal chalk behavior
const color = {
  yellow: (str: string) => `\x1b[33m${str}\x1b[0m`,
  green: (str: string) => `\x1b[32m${str}\x1b[0m`,
  red: (str: string) => `\x1b[31m${str}\x1b[0m`,
  blue: (str: string) => `\x1b[34m${str}\x1b[0m`
};

function getMsgPrefix() {
  return `[mrey-express@${app('version')} ${formatDate(new Date())}]`;
}

export const infoLog = (...args: any[]) => {
  log(color.yellow(getMsgPrefix()), color.green(args.join(' ')));
};

export const errLog = (...args: any[]) => {
  error(color.yellow(getMsgPrefix()), color.red(args.join(' ')));
};

export const warnLog = (...args: any[]) => {
  log(color.yellow(getMsgPrefix()), color.blue(args.join(' ')));
};
