import { HttpException, HttpStatus } from '@nestjs/common';

export class GoogleAuthFailException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
