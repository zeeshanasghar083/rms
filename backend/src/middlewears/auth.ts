import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class authMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req?.headers?.authorization?.split(' ')[1] === '12345') next()
    else throw new UnauthorizedException()
  }
}
