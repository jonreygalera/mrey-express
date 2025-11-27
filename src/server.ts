import { appConfig } from "./config";
import webRoutes from './routes/web.routes';
import express, { Express } from 'express';

const app = express();
app.use('/', webRoutes);

const PORT = appConfig.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
