import { HttpException, HttpStatus } from '@nestjs/common';

export class FriendAlreadyAddedException extends HttpException {
  constructor() {
    super('Friend already added', HttpStatus.FORBIDDEN);
  }
}
