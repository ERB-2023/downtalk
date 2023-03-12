import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async searchUsers(@Query('searchKey') searchKey: string) {
    return this.userService.searchUser(searchKey);
  }

  @Get('/:userId/profile')
  async getProfile(@Param('userId') userId: number) {
    return this.userService.getProfile(userId);
  }

  @Get('/profile')
  async getMyProfile(@Req() req: { user: { id: number } }) {
    console.log(req.user);
    return this.userService.getProfile(req.user.id);
  }
}
