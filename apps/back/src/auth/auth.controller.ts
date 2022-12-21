import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    @Post("signup")
    async signup(@Body() { loginId, password, name }: any) {
        await this.authService.createUser(loginId, password, name);
    }

    @Post("email/verfiy")
    async verifyEmail(@Body() { email }) {
        await this.authService.sendVerifyEmail(email);
    }
}
