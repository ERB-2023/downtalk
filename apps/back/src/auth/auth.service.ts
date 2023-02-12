import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { loginDto } from 'src/common/dto/loginDto';
import { GoogleAuthFailException } from 'src/common/exception/auth.exception';
import { Repository } from 'typeorm';
import { User } from 'src/database/entity/user.entity';
import { JwtService } from '@nestjs/jwt';

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

  async findUser(email: string) {
    const row = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    return row ? true : false;
  }

  async registerUser(email: string, name: string) {
    await this.userRepository.save({
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

  async generateToken(email: string) {
    const accessToken = this.jwtService.sign(
      { email },
      {
        expiresIn: '2h',
      },
    );

    const refreshToken = this.jwtService.sign(
      { email },
      {
        expiresIn: '7d',
      },
    );

    const data = { accessToken, refreshToken };

    return data;
  }
}
