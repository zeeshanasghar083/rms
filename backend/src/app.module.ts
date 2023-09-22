import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeOrmAsyncConfig from './config/typeorm.config'

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
