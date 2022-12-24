import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(){}

    async checkEmailDuplication(email: string) {
        //1. check user Repository

        //2. if(duplicated) throw ForbiddenException;
    }
}
