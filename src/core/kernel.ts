import express, { Express } from 'express';
import DatabaseCore from './database.core';
import RegisterProvider from '../app/providers/register.provider';
import IAppKernel from './types/appKernel.type';
import { errLog } from './utils/logger.util';

export const appKernel : IAppKernel = {
  appExpress: express(),
  database: DatabaseCore.getInstance()
};

export default async function(): Promise<Express | void> {
  try {
    // Database connection initialization with error handling
    await appKernel.database.createConnection();

    // Register all application providers for runtime execution
    (new RegisterProvider(appKernel)).register();
    return appKernel.appExpress;
  } catch (error) {
    errLog('Kernel initialization error:', error);
  }
}