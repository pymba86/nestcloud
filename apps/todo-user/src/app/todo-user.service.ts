import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoUserService {
  getHello(): string {
    return 'Hello World!';
  }
}
