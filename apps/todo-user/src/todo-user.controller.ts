import { Controller, Get } from '@nestjs/common';
import { TodoUserService } from './todo-user.service';

@Controller()
export class TodoUserController {
  constructor(private readonly todoUserService: TodoUserService) {}

  @Get()
  getHello(): string {
    return this.todoUserService.getHello();
  }
}
