import express from 'express';
import kernel from './core/kernel';
import config from './config/app.config';
import { errLog, infoLog } from './core/utils/logger.util';
import IAppKernel from './core/types/appKernel.type';
import DatabaseCore from './core/database.core';
import appConfig from './config/app.config';

const app = express();

const initializeApp = async () => {
  try {
    const appKernel: IAppKernel = {
      appExpress: app,
      database: DatabaseCore.getInstance()
    };

    await kernel(appKernel);

    // Only listen if not in a serverless environment
    if (!appConfig.severless) {
      appKernel.appExpress.listen(config.port, () => {
        infoLog(`Listening to port: ${config.port}`);
      });
    } else {
      infoLog(`Running on serverless environment`);
    }

    return appKernel.appExpress;
  } catch (error) {
    errLog('Failed to initialize the server:', error);
    throw error;
  }
};

initializeApp();

export default app;