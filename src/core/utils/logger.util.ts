import { formatDate } from './date.util';
import { app } from './app.util';

const log = console.log;
const error = console.error;

function getMsgPrefix() {
  return `[mrey-express@${app('version')} ${formatDate(new Date())}]`;
}

export const infoLog = (...args: any[]) => {
  log(getMsgPrefix(), ...args);
};

export const errLog = (...args: any[]) => {
  error(getMsgPrefix(), ...args);
};

export const warnLog = (...args: any[]) => {
  log(getMsgPrefix(), ...args);
};
