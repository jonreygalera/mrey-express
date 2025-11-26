import IAppKernel from '../../core/types/appKernel.type';
import CorsMiddleware from '../middleware/cors.middleware';

export default class GlobalMiddlewareProvider {
  constructor(public appKernel: IAppKernel) {}
  
  handle() {
    return [
      (new CorsMiddleware(this.appKernel)).handle()
    ];
  }
  
}