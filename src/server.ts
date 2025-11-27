
// let isInitialized = false;

import { appConfig } from "./config";
// import app from "./core/app";
import { infoLog } from "./core/utils/logger.util";
import webRoutes from './routes/web.routes';
import express, { Express } from 'express';
// const initializeApp = async () => {
//   if (isInitialized) return app;
//   try {
//     const appKernel: IAppKernel = {
//       appExpress: app,
//       database: DatabaseCore.getInstance()
//     };

//     await kernel(appKernel);
//     isInitialized = true;

//     // For Vercel: Do not listen here, just initialize
//     if (!appConfig.severless) {
//       appKernel.appExpress.listen(config.port, () => {
//         infoLog(`Listening to port: ${config.port}`);
//       });
//     } else {
//       infoLog(`Running in serverless or Vercel environment`);
//     }

//     return appKernel.appExpress;
//   } catch (error) {
//     errLog('Failed to initialize the server:', error);
//     throw error;
//   }
// };

// if (!appConfig.severless) {
//   // Only start server if not in serverless mode and not on Vercel
//   initializeApp();
// } else {
//   // For Vercel, export a handler (the default export)
//   initializeApp();
// }

// const appKernel: IAppKernel = {
//   appExpress: app,
//   database: DatabaseCore.getInstance()
// };


// kernel(appKernel);

// export default app;

// app.listen(appConfig.port, () => {
//   infoLog(`Listening to port: ${appConfig.port}`);
// });

const app = express();
app.use('/', webRoutes);