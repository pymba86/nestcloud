import { Module } from '@nestjs/common';
import { IdentityProviderController } from './identity-provider.controller';
import { IdentityProviderService } from './identity-provider.service';

@Module({
  imports: [],
  controllers: [IdentityProviderController],
  providers: [IdentityProviderService],
})
export class IdentityProviderModule {}
