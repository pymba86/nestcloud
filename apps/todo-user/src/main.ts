import { NestFactory } from '@nestjs/core';
import { TodoUserModule } from './todo-user.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoUserModule);
  await app.listen(3000);
}
bootstrap();
