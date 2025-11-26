import kernel from './core/kernel';
import config from './config/app.config';
import { errLog, infoLog } from './core/utils/logger.util';

const serverPromise = kernel();

serverPromise.then(server => {
  if (server) {
    server.listen(config.port, () => {
      infoLog(`Listening to port: ${config.port}`);
    });
  }
}).catch(error => {
  errLog('Failed to start the server:', error);
  process.exit(1); // Exit the process with a failure code
});