import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceHubService {
  getHello(): string {
    return 'Hello World!';
  }
}
