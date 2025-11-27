import express from 'express';
import { appConfig } from './config';
import { infoLog } from './core/utils/logger.util';
import webRouter from './routes/web.routes';
// import kernel from './core/kernel';
// import config from './config/app.config';
// import { errLog, infoLog } from './core/utils/logger.util';
// import IAppKernel from './core/types/appKernel.type';
// import DatabaseCore from './core/database.core';

// export const appKernel : IAppKernel = {
//   appExpress: express(),
//   database: DatabaseCore.getInstance()
// };

// (async () => {
//   try {
//     await kernel(appKernel);
//     appKernel.appExpress.listen(config.port, () => {
//       infoLog(`Listening to port: ${config.port}`);
//     });
//   } catch (error) {
//     errLog('Failed to start the server:', error);
//     process.exit(1);
//   }
// })();

const app = express();

app.use('/', webRouter);

// app.listen(appConfig.port, () => {
//   infoLog(`Listening to port: ${appConfig.port}`);
// });

export default app;