import { Express } from 'express';
import RegisterProvider from '../app/providers/register.provider';
import IAppKernel from './types/appKernel.type';
import { errLog } from './utils/logger.util';


export default async function(appKernel: IAppKernel): Promise<Express | void> {
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