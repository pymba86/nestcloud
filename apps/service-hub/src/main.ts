import { NestFactory } from '@nestjs/core';
import { ServiceHubModule } from './app/service-hub.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceHubModule);
  await app.listen(3000);
}
bootstrap();
