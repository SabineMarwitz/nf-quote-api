import { Controller, Get } from '@nestjs/common';
//  Post, Body, Param, Put, Delete, NotFoundException,
import { QuoteService } from './quote.service';
import { Quote } from './interfaces/quote.interface';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  getAll(): Quote[] {
    return this.quoteService.getAllQuotes();
  }

  @Get('/test')
  getTest(): string {
    return this.quoteService.getTest();
  }
}
