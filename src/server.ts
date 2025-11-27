import { appConfig } from "./config";
import { infoLog, errLog } from "./core/utils/logger.util";
import express from 'express';
import kernel from './core/kernel';

const app = express();
const PORT = appConfig.port || 3000;

(async () => {
  try {
    await kernel(app);
    app.listen(PORT, () => {
      infoLog(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    errLog('Server initialization error:', error);
    process.exit(1);
  }
})();
