import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async searchUsers(
    @Query('searchKey') searchKey: string,
    @Query('limit') limit: string = '10',
    @Query('offset') offset: string = '0',
  ) {
    const parsedLimit = parseInt(limit, 10);
    const parsedOffset = parseInt(offset, 10);

    return this.userService.searchUsers(searchKey, parsedLimit, parsedOffset);
  }

  @Get('/:userId/profile')
  async getProfile(@Param('userId') userId: number) {
    return this.userService.getProfile(userId);
  }
}
