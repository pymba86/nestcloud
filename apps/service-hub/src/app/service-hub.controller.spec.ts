import { Test, TestingModule } from '@nestjs/testing';
import { ServiceHubController } from './service-hub.controller';
import { ServiceHubService } from './service-hub.service';

describe('ServiceHubController', () => {
  let serviceHubController: ServiceHubController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceHubController],
      providers: [ServiceHubService],
    }).compile();

    serviceHubController = app.get<ServiceHubController>(ServiceHubController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceHubController.getHello()).toBe('Hello World!');
    });
  });
});
