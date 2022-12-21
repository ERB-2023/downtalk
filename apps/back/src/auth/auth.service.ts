import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor() { }

    async createUser(loginId:string, password:string, name:string) {}
}
