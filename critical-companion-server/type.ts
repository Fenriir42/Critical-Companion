import { Request, Response, NextFunction} from 'express';

declare global {
    namespace Express {
      interface Request {
        user?: any;
      }
    }
  }

export type Handler = (req: Request, res: Response, next?: NextFunction) => Response<any, Record<string, any>> | void;

export type DBCallback = (result: any, err: any) => any

export type Route = {
    path: String,
    method: String,
    handler: Handler[],
    auth: Boolean,
};
