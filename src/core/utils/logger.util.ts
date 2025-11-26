import chalk from 'chalk';
import { formatDate } from './date.util';
import { app } from './app.util';

const log = console.log;
const error = console.error;

const MSG_PREFIX = `[mrey-express@${app('version')} ${formatDate(new Date())}]`;

export const infoLog = (...args: any[]) => {
  log(chalk.yellow(MSG_PREFIX), chalk.green(...args));
};

export const errLog = (...args: any[]) => {
  error(chalk.yellow(MSG_PREFIX), chalk.red(...args));
};