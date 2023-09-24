import { Module } from '@nestjs/common'
import { TenantService } from './tenant.service'
import { TenantController } from './tenant.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Tenant } from './entities/tenant.entity'
import { UserModule } from '../user/user.module'

@Module({
  imports: [TypeOrmModule.forFeature([Tenant]), UserModule],
  controllers: [TenantController],
  providers: [TenantService],
})
export class TenantModule {}
