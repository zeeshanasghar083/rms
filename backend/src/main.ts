import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import K from './utilities/constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  await app.listen(K.port)
}

bootstrap()

// -for generate module by command
// nest g res <module Name>

// -generate migration commad
// npm run mig:gen -- db/migrations/testMigration
// npm run mig:run
