import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { loginDto } from 'src/common/dto/loginDto';
import { GoogleAuthFailException } from 'src/common/exception/auth.exception';
import { googleUserinfoDto } from 'src/common/dto/googleUserinfoDto';
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
      throw new GoogleAuthFailException(e.toString());
    }
  }

  async findUser(user: googleUserinfoDto) {
    const email = user.email;
    const row = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    return row ? true : false;
  }

  async registerUser(user: googleUserinfoDto) {
    const email = user.email;
    const name = user.name;

    await this.userRepository.save({
      email,
      name,
    });

    return true;
  }

  async loginUser(user: googleUserinfoDto) {
    const email = user.email;
    const row = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    return row ? true : false;
  }

  async generateToken(user: googleUserinfoDto) {
    const accessToken = this.jwtService.sign(user, {
      expiresIn: '2h',
    });

    const refreshToken = this.jwtService.sign(user, {
      expiresIn: '7d',
    });

    const data = { accessToken, refreshToken };

    return data;
  }
}
