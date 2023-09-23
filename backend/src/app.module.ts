import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeOrmAsyncConfig from './config/typeorm.config'
// import { loggerMiddleware } from './middlewears/logger'
import { authMiddleware } from './middlewears/auth'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig), UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(loggerMiddleware).forRoutes('*')
    consumer.apply(authMiddleware).exclude({ path: 'auth/login', method: RequestMethod.POST }).forRoutes('*')
  }
}
