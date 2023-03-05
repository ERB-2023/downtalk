import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { loginDto } from 'src/common/dto/loginDto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() req: loginDto) {
    const user = await this.authService.checkGoogleUser(req);
    const ExistedUser = await this.authService.findUser(user.email);

    if (!ExistedUser) {
      await this.authService.registerUser(user.email, user.name);
    }

    const token = await this.authService.generateToken(user.email);
    return token;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async testAuthGuard(@Request() req: any) {
    return `authentication success : ${req.user}`;
  }
}
