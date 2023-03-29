import { NestFactory } from '@nestjs/core';
import { TodoUserModule } from './app/todo-user.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoUserModule);
  await app.listen(3000);
}
bootstrap();
