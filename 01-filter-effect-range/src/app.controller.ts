import { Controller, Get, Req, UseFilters } from '@nestjs/common';
import { Request } from 'express';
import { ApiException } from './exceptions/api.exception';

@Controller()
export class AppController {
  @Get()
  getHello(@Req() req: Request): string {
    throw new ApiException('-1', 'api error', req.user);
  }
}
