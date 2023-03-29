import { Test, TestingModule } from '@nestjs/testing';
import { IdentityProviderController } from './identity-provider.controller';
import { IdentityProviderService } from './identity-provider.service';

describe('IdentityProviderController', () => {
  let identityProviderController: IdentityProviderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IdentityProviderController],
      providers: [IdentityProviderService],
    }).compile();

    identityProviderController = app.get<IdentityProviderController>(IdentityProviderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(identityProviderController.getHello()).toBe('Hello World!');
    });
  });
});
