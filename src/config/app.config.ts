import env from '../utils/env';

interface IAppConfig {
  key: string;
  url: string;
  port: number;
  nodeEnv: string;
  severless?: boolean;
}

const appConfig: IAppConfig = {
  key: env('APP_KEY', 'secret'),
  url: env('URL', `http://localhost:${Number(env('PORT', 3000))}`),
  port: Number(env('APP_PORT', 3000)),
  nodeEnv: env('NODE_ENV', 'development'),
  severless: env('SERVERLESS', 'false') === 'true',
};

export default appConfig;