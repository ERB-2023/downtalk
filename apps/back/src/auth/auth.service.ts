import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor() { }

    async createUser(loginId:string, password:string, name:string) {}

    async sendVerifyEmail(email:string) {
        // send sms or email by open api
    }
}
