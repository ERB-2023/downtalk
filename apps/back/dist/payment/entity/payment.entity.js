"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const coin_entity_1 = require("../../coin/entity/coin.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const typeorm_1 = require("typeorm");
const payment_status_enum_1 = require("../enum/payment-status.enum");
const payment_type_enum_1 = require("../enum/payment-type.enum");
let Payment = class Payment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: payment_type_enum_1.PAYMENT_TYPE,
        nullable: false
    }),
    __metadata("design:type", String)
], Payment.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: payment_status_enum_1.PAYMENT_STATUS,
        default: payment_status_enum_1.PAYMENT_STATUS.READY
    }),
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Payment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Payment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_entity_1.User, (user) => user.payments),
    __metadata("design:type", user_entity_1.User)
], Payment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => coin_entity_1.Coin, (coin) => coin.payments),
    __metadata("design:type", coin_entity_1.Coin)
], Payment.prototype, "coin", void 0);
Payment = __decorate([
    (0, typeorm_1.Entity)()
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.entity.js.map