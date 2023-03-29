import { Controller, Get } from '@nestjs/common';
import { ServiceHubService } from './service-hub.service';

@Controller()
export class ServiceHubController {
  constructor(private readonly serviceHubService: ServiceHubService) {}

  @Get()
  getHello(): string {
    return this.serviceHubService.getHello();
  }
}
