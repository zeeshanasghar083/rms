import { Injectable } from '@nestjs/common'
import { CreateTenantDto } from './dto/create-tenant.dto'
import { UpdateTenantDto } from './dto/update-tenant.dto'
import { Tenant } from './entities/tenant.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UserService } from '../user/user.service'

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant)
    private tenantRepository: Repository<Tenant>,
    private userService: UserService,
  ) {}

  create(createTenantDto: CreateTenantDto) {
    return 'This action adds a new tenant'
  }

  async findAll() {
    let user = await this.userService.findOne(1)
    let tenant = await this.tenantRepository.findAndCountBy({ user })
    return tenant
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
