import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { loginDto } from 'src/common/dto/loginDto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() req: loginDto) {
    const user = await this.authService.checkGoogleUser(req);

    const ci = await this.authService.generateCi(user.email);
    const ExistedUser = await this.authService.findUser(ci);

    if (!ExistedUser) {
      await this.authService.registerUser(ci, user.email, user.name);
    }

    const token = await this.authService.generateToken(ci);
    return token;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async testAuthGuard() {
    return 'authentication success';
  }
}
