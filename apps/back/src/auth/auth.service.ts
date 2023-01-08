import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { UserExceptions } from 'src/user/user.exception';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) {}

    async createUser(loginId:string, name:string, password:string) {
        const isExistUser = await this.userRepository.findOne({
            where: { loginId }
        })

        const user = User.create(loginId, password, name);
        if(isExistUser) throw UserExceptions.UserNotFoundException();
        return await this.userRepository.save(user);
    }

    async sendVerifyEmail(email:string) {
        // send sms or email by open api
    }

    async login(loginId:string, password:string): Promise<{ jwtToken: string}> {
        const user = await this.userRepository.findOne({
            where: { loginId, password }
        });

        if(!user) throw UserExceptions.UserNotFoundException();

        const jwtToken = await this.jwtService.sign({ userId: user.id });
        return { jwtToken };
    }
}
