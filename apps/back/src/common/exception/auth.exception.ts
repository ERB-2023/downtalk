import { HttpException, HttpStatus } from '@nestjs/common';

export class GoogleAuthFailException extends HttpException {
  constructor() {
    super('Google Auth Error', HttpStatus.UNAUTHORIZED);
  }
}
