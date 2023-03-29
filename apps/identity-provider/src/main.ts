import { NestFactory } from '@nestjs/core';
import { IdentityProviderModule } from './identity-provider.module';

async function bootstrap() {
  const app = await NestFactory.create(IdentityProviderModule);
  await app.listen(3000);
}
bootstrap();
