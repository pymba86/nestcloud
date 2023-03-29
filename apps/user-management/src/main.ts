import { NestFactory } from '@nestjs/core';
import { UserManagementModule } from './app/user-management.module';

async function bootstrap() {
  const app = await NestFactory.create(UserManagementModule);
  await app.listen(3000);
}
bootstrap();
