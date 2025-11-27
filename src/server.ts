import express from 'express';
import kernel from './core/kernel';
import config from './config/app.config';
import { errLog, infoLog } from './core/utils/logger.util';
import IAppKernel from './core/types/appKernel.type';
import DatabaseCore from './core/database.core';

export const appKernel : IAppKernel = {
  appExpress: express(),
  database: DatabaseCore.getInstance()
};

(async () => {
  try {
    await kernel(appKernel);
    // UNCOMMENT FOR non-vercel prod
    // appKernel.appExpress.listen(config.port, () => {
    //   infoLog(`Listening to port: ${config.port}`);
    // });
  } catch (error) {
    errLog('Failed to start the server:', error);
    process.exit(1);
  }
})();

export default appKernel.appExpress;