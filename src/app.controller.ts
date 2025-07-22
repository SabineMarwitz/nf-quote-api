import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/random')
  getRandomQuote(): string {
    return this.appService.getOne();
  }

  @Get('/all')
  getAllQuotes(): string {
    return this.appService.getAll();
  }
}
