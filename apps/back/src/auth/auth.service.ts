import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { UserExceptions } from 'src/user/user.exception';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
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
}
