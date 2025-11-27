import express, { Express } from 'express';
import RegisterProvider from '../app/providers/register.provider';
import IAppKernel from './types/appKernel.type';
import { errLog } from './utils/logger.util';
import DatabaseCore from './database.core';

const app = express();
const appKernel: IAppKernel = {
  appExpress: app,
  database: DatabaseCore.getInstance()
};

appKernel.database.createConnection();
(new RegisterProvider(appKernel)).register();

// const app = (appKernel: IAppKernel) => {
//   try {
//     // Database connection initialization with error handling
//     // await appKernel.database.createConnection();

//     // Register all application providers for runtime execution
//     (new RegisterProvider(appKernel)).register();
//     return appKernel.appExpress;
//   } catch (error) {
//     errLog('Kernel initialization error:', error);
//   }
// }

export default app;