import { Res, Body, Controller, Post, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
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

    @Post("login")
    async login(
        @Body() body:{ loginId:string, password:string },
        @Res() res: Response
        ):Promise<Response> {
        const { jwtToken } = await this.authService.login(body.loginId, body.password);
        res.setHeader("Authorization", jwtToken);
        return res.status(HttpStatus.OK).send();
    }
}
