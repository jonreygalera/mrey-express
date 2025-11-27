import express, { Express } from 'express';
import RegisterProvider from '../app/providers/register.provider';
import IAppKernel from './types/appKernel.type';
import { errLog } from './utils/logger.util';
import DatabaseCore from './database.core';
import webRoutes from '../routes/web.routes';


// appKernel.database.createConnection();
// (new RegisterProvider(appKernel)).register();

export default async function(appServer: Express) {
  try {
    const appKernel : IAppKernel = {
      appExpress: appServer,
      database: DatabaseCore.getInstance()
    };

    // Database connection initialization with error handling
    // await appKernel.database.createConnection();

    // Register all application providers for runtime execution
    (new RegisterProvider(appKernel)).register();
    return appKernel.appExpress;
  } catch (error) {
    errLog('Kernel initialization error:', error);
  }
}
