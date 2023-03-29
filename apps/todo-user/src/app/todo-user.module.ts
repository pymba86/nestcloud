import { Module } from '@nestjs/common';
import { TodoUserController } from './todo-user.controller';
import { TodoUserService } from './todo-user.service';

@Module({
  imports: [],
  controllers: [TodoUserController],
  providers: [TodoUserService],
})
export class TodoUserModule {}
