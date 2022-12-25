import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    @Post("signup")
    async signup(@Body() { loginId, password, name }: any) {
        const user = await this.authService.createUser(loginId, password, name);
        return user;
    }

    @Post("email/verfiy")
    async verifyEmail(@Body() { email }) {
        await this.authService.sendVerifyEmail(email);
    }
}
