import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm'
import K from 'src/utilities/constants'

const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: K.dbHost,
      port: K.dbPort,
      username: K.dbUser,
      password: K.dbPassword,
      database: K.dbName,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    }
  },
}

export default typeOrmAsyncConfig
