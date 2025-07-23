import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { getQuoteData } from '../data/quotes.data';

@Injectable() // This makes it injectable into other parts of NestJS
export class QuoteRepository {
  private quotes: Quote[] = []; // Internal cache, updated from "file"

  constructor() {
    this.quotes = getQuoteData(); // Load data when repository is created
  }

  getAll(): Quote[] {
    return [...this.quotes]; // Return all quotes
  }
}
