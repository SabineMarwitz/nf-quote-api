import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { QuoteRepository } from './quote.repository';

@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {} // Inject the repository

  getAllQuotes(): Quote[] {
    return this.quoteRepository.getAll();
  }

  getTest(): string {
    return 'THIS IS A TEST!';
  }
}
