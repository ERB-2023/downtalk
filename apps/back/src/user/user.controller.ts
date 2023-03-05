import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async searchUsers(
    @Query('searchKey') searchKey: string,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
    return this.userService.searchUsers(searchKey, limit, offset);
  }

  @Get('/:userId/profile')
  async getProfile(@Param('userId') userId: number) {
    return this.userService.getProfile(userId);
  }
}
