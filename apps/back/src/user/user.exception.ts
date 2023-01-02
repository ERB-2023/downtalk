import { ForbiddenException, HttpException } from "@nestjs/common";

export class UserExceptions extends HttpException {
    static UserNotFoundException() {
        return new ForbiddenException();
    }
}