import chalk from 'chalk';
import { formatDate } from './date.util';
import { app } from './app.util';

const log = console.log;
const error = console.error;

function getMsgPrefix() {
  return `[mrey-express@${app('version')} ${formatDate(new Date())}]`;
}

export const infoLog = (...args: any[]) => {
  log(chalk.yellow(getMsgPrefix()), chalk.green(...args));
};

export const errLog = (...args: any[]) => {
  error(chalk.yellow(getMsgPrefix()), chalk.red(...args));
};

export const warnLog = (...args: any[]) => {
  log(chalk.yellow(getMsgPrefix()), chalk.blue(...args));
};
