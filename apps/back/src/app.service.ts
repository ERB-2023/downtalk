import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('Not implemented');
    return 'Hello World!';
  }
}
