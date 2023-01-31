import { Body, Controller, Post } from '@nestjs/common';
import { loginDto } from 'src/common/dto/loginDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() req: loginDto) {
    const user = await this.authService.checkGoogleUser(req);
    const ExistedUser = await this.authService.findUser(user);

    if (!ExistedUser) {
      await this.authService.registerUser(user);
    }

    const token = await this.authService.generateToken(user);
    return token;
  }
}
