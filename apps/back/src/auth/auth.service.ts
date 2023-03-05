import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { loginDto } from 'src/common/dto/loginDto';
import { GoogleAuthFailException } from 'src/common/exception/auth.exception';
import { Repository } from 'typeorm';
import { User } from 'src/database/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const algorithm = 'aes-256-cbc';
const iv = randomBytes(16);
const key = Buffer.from(randomBytes(32));

interface GoogleUser {
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
  ) {}

  async checkGoogleUser(req: loginDto): Promise<GoogleUser> {
    try {
      // const response = await firstValueFrom(
      //   this.httpService.get(
      //     'https://www.googleapis.com/oauth2/v1/tokeninfo' +
      //       `?access_token=${req.token}`,
      //   ),
      // );

      return this.jwtService.decode(req.token) as GoogleUser;
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

  async loginUser(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async generateToken(email: string) {
    const user = await this.loginUser(email);
    const ci = await this.generateCi(user.id);
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

  async generateCi(userId: number) {
    // const cipher = createCipheriv(algorithm, Buffer.from(key), iv);
    // const encrypted = cipher.update(email);

    // return (
    //   iv.toString('hex') +
    //   ':' +
    //   Buffer.concat([encrypted, cipher.final()]).toString('hex')
    // );

    return userId;
  }

  async verifyCi(ci: any) {
    // const textParts = ci.split(':');
    // const iv = Buffer.from(textParts.shift(), 'hex');
    // const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    // const decipher = createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    // const decrypted = decipher.update(encryptedText);

    // return Buffer.concat([decrypted, decipher.final()]).toString();

    return ci;
  }
}
