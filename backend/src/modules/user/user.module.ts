import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { User } from './entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Tenant } from '../tenant/entities/tenant.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, Tenant])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
