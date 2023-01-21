import { Controller, Get, Post } from '@nestjs/common';

@Controller('friends')
export class FriendController {
    constructor() {}

    @Post()
    async requestFriend() {}

    @Get()
    async getFriends() {}
}
