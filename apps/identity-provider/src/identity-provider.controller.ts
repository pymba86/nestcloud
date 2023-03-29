import { Controller, Get } from '@nestjs/common';
import { IdentityProviderService } from './identity-provider.service';

@Controller()
export class IdentityProviderController {
  constructor(private readonly identityProviderService: IdentityProviderService) {}

  @Get()
  getHello(): string {
    return this.identityProviderService.getHello();
  }
}
