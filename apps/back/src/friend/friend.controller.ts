import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { Friend } from 'src/database/entity/friend.entity';
import { FriendService } from './friend.service';

@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get()
  async getFriends(
    @Request() req: { user: { id: number } },
    @Query('limit', new DefaultValuePipe(0), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(10), ParseIntPipe) offset: number,
  ): Promise<Friend[]> {
    return this.friendService.findFriends(req.user.id, limit, offset);
  }

  @Post()
  async requestFriend(
    @Request() req: { user: { id: number } },
    @Body('userId') addressedUserId: number,
  ): Promise<void> {
    return this.friendService.addFriend(req.user.id, addressedUserId);
  }
}
