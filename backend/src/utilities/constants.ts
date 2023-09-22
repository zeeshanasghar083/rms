import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'

config()
const configService = new ConfigService()

const K = {
  env: configService.get('NODE_ENV'),
  port: configService.get('PORT') || 9000,
  dbHost: configService.get('DB_HOST'),
  dbPort: configService.get('DB_PORT'),
  dbUser: configService.get('DB_USER'),
  dbPassword: configService.get('DB_PASSWORD'),
  dbName: configService.get('DB_DATABASE'),
  connectionLimit: 10,
}

export default K
