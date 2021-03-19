import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiException } from 'src/exceptions/api.exception';

declare module 'express' {
  interface Request {
    user: { [x: string]: any };
  }
}

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    req.user = { id: 1 };
    // throw new ApiException('-2', 'Middleware exception');
    next();
  }
}
