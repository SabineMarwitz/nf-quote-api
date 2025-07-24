import { Injectable } from '@nestjs/common';
import { QuoteService } from 'quotes/quote.service';

@Injectable()
export class AppService {
  constructor(private readonly quoteService: QuoteService) {}

  getHello(): string {
    return 'Hello World!';
  }
}
