import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getOne(): string {
    return 'Random Quote';
  }
  getAll(): string {
    return 'All Quotes';
  }
}
