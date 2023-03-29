import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentityProviderService {
  getHello(): string {
    return 'Hello World!';
  }
}
