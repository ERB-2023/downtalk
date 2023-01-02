import { ForbiddenException, HttpException } from "@nestjs/common";
export declare class UserExceptions extends HttpException {
    static UserNotFoundException(): ForbiddenException;
}
