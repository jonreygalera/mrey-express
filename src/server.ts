import { appConfig } from "./config";
import { infoLog } from "./core/utils/logger.util";
import webRoutes from './routes/web.routes';
import express, { Express } from 'express';

const app = express();
app.use('/', webRoutes);

const PORT = appConfig.port || 3000;

app.listen(PORT, () => {
 infoLog(`Server is running on port ${PORT}`);
});
