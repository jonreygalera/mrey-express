import { NextFunction, Request, Response } from "express";
import Middleware from "../../core/middleware/middleware";
import { merge } from "lodash";
import { authUser } from "../../utils/auth";
import { errLog } from "../../core/utils/logger.util";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authenticatedUser = await authUser(req);
    if(!authenticatedUser) {
      return res.sendStatus(403);
    }
    merge(req, { auth: authenticatedUser});
    return next();
  } catch (error) {
    errLog('Authentication', error);
    return res.sendStatus(500);
  }
}

export default class AuthMiddleware extends Middleware {

  handle() : any {
    return isAuthenticated;
  }

}