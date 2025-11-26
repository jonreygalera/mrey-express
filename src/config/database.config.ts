import { IDatabaseConfig, TDatabaseDriver } from "../core/database/types/database.type";
import env from "../utils/env";

const DatabaseConfig: IDatabaseConfig = {
  enable: env('DB_ENABLE', 'false') === 'true',
  driver: env('DB_CONNECTION_DRIVER', 'mongoose' as TDatabaseDriver),
  connection: { 
    'mongoose': {
      driver: 'mongoose',
      host: env('DB_CONNECTION_HOST', 'localhost'),
      username: env('DB_CONNECTION_USERNAME', ''),
      password: env('DB_CONNECTION_PASSWORD', ''),
      appName: env('DB_CONNECTION_APP_NAME', ''),
      dbName: env('DB_CONNECTION_DB_NAME', ''),
    }
  }
}

export default DatabaseConfig;