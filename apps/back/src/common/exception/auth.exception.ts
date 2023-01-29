import { HttpException, HttpStatus } from '@nestjs/common';

export class GoogleAuthFailException extends HttpException {
  constructor() {
    super('Auth Fail', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
