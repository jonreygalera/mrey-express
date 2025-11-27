import { Express } from 'express';
import RegisterProvider from '../app/providers/register.provider';
import IAppKernel from './types/appKernel.type';
import { errLog } from './utils/logger.util';


// export default function(appKernel: IAppKernel): Promise<Express | void> {
export default function(appKernel: IAppKernel) {
  try {
    // Database connection initialization with error handling
    // await appKernel.database.createConnection();

    // Register all application providers for runtime execution
    (new RegisterProvider(appKernel)).register();
    return appKernel.appExpress;
  } catch (error) {
    errLog('Kernel initialization error:', error);
  }
}