import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { UserService } from 'src/modules/user/user.service'

@Injectable()
export class authMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}
  use(req: Request, res: Response, next: NextFunction) {
    if (req?.headers?.authorization?.split(' ')[1] === '12345') next()
    else throw new UnauthorizedException({ success: false, response: 'UnAuthorized' })
  }
}
