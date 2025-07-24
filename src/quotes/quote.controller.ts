import { Controller, Get } from '@nestjs/common';
//  Post, Body, Param, Put, Delete, NotFoundException,
import { QuoteService } from './quote.service';
import { Quote } from './interfaces/quote.interface';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  getAll(): Quote[] {
    return this.quoteService.getAllQuotes();
  }

  @Get('/random')
  getOne(): Quote | string {
    return this.quoteService.getRandomQuote();
  }
}
