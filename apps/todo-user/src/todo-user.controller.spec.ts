import { Test, TestingModule } from '@nestjs/testing';
import { TodoUserController } from './todo-user.controller';
import { TodoUserService } from './todo-user.service';

describe('TodoUserController', () => {
  let todoUserController: TodoUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoUserController],
      providers: [TodoUserService],
    }).compile();

    todoUserController = app.get<TodoUserController>(TodoUserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(todoUserController.getHello()).toBe('Hello World!');
    });
  });
});
