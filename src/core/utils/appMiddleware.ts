import Middleware from "../middleware/middleware";

export const appMiddleware = (middleware: Middleware | Middleware[], callback: () => void) => {
  const middlewares = Array.isArray(middleware) ? middleware : [middleware];
  
  middlewares.forEach((mw) => {
    mw.appKernel.appExpress.use(mw.handle());
  });

  callback();
}