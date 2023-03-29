import { Module } from '@nestjs/common';
import { ServiceHubController } from './service-hub.controller';
import { ServiceHubService } from './service-hub.service';

@Module({
  imports: [],
  controllers: [ServiceHubController],
  providers: [ServiceHubService],
})
export class ServiceHubModule {}
