import { NotFoundException } from '@nestjs/common';

export class FriendNotFound extends NotFoundException {
  constructor() {
    super('Friend is not found');
  }
}
