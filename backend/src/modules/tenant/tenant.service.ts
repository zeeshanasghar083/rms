import { Injectable } from '@nestjs/common'
import { CreateTenantDto } from './dto/create-tenant.dto'
import { UpdateTenantDto } from './dto/update-tenant.dto'
import { Tenant } from './entities/tenant.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant)
    private tenantRepository: Repository<Tenant>,
  ) {}

  create(createTenantDto: CreateTenantDto) {
    return 'This action adds a new tenant'
  }

  findAll() {
    return `This action returns all tenant`
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`
  }
}
