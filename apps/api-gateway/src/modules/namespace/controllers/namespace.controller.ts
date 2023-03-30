import { Controller, Get } from '@nestjs/common';

@Controller()
export class NamespaceController {
  // Веб хук получения нового сервиса с описанием  openapi
  @Get()
  hub(): string {
    return '';
  }
}
