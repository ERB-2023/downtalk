import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { FriendService } from './friend.service';

@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post()
  async requestFriend(
    @Request() req: { user: { id: number } },
    @Body('userId') addressedUserId: number,
  ): Promise<void> {
    return this.friendService.addFriend(req.user.id, addressedUserId);
  }

  @Get()
  async getFriends() {}
}
