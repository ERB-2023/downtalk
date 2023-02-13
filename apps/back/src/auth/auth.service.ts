import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { loginDto } from 'src/common/dto/loginDto';
import { GoogleAuthFailException } from 'src/common/exception/auth.exception';
import { Repository } from 'typeorm';
import { User } from 'src/database/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { createHmac } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
  ) {}

  async checkGoogleUser(req: loginDto) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          process.env.GOOGLE_USERINFO_API + `?access_token=${req.token}`,
        ),
      );

      return response.data;
    } catch (e) {
      throw new GoogleAuthFailException();
    }
  }

  async findUser(ci: string) {
    const row = await this.userRepository.findOne({
      where: {
        ci,
      },
    });

    return row ? true : false;
  }

  async registerUser(ci: string, email: string, name: string) {
    await this.userRepository.save({
      ci,
      email,
      name,
    });

    return true;
  }

  async loginUser(email: string) {
    const row = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    return row ? true : false;
  }

  async generateCi(email: string) {
    const ci = createHmac('sha256', process.env.JWT_SECRET)
      .update(email)
      .digest('base64');
    return ci;
  }

  async generateToken(ci: string) {
    const accessToken = this.jwtService.sign(
      { ci },
      {
        expiresIn: '2h',
      },
    );

    const refreshToken = this.jwtService.sign(
      { ci },
      {
        expiresIn: '7d',
      },
    );

    const data = { accessToken, refreshToken };

    return data;
  }
}
