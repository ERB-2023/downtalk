import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){}

    @Get('/verify/existence')
    async validateEmailDuplication(@Query("email") email:string) {
        await this.userService.checkEmailDuplication(email);
        return;
    }
}
