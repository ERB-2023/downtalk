"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExceptions = void 0;
const common_1 = require("@nestjs/common");
class UserExceptions extends common_1.HttpException {
    static UserNotFoundException() {
        return new common_1.ForbiddenException();
    }
}
exports.UserExceptions = UserExceptions;
//# sourceMappingURL=user.exception.js.map