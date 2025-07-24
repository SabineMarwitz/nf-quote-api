import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { QuoteRepository } from './quote.repository';

@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {} // Inject the repository

  getAllQuotes(): Quote[] {
    return this.quoteRepository.getAll();
  }

  getRandomQuote(): Quote | string {
    const length = this.quoteRepository.getAll().length;
    if (length > 0) {
      const index = Math.floor(Math.random() * length);
      return this.quoteRepository.getAll()[index];
    }
    return 'No quote available';
  }
}
