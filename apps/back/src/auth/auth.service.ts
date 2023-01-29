import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { GoogleAuthFailException } from 'src/common/exception/auth.exception';

async function getGoogleUser(httpService: HttpService, token: string) {
  let user;
  try {
    user = await firstValueFrom(
      httpService.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
      ),
    );
  } catch (error) {
    console.log(error);
  }
  return user;
}

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}
  login(userData: any) {
    const token = userData.token;

    const user = getGoogleUser(this.httpService, token);
    return userData;
  }
}
