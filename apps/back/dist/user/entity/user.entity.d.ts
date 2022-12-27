import { Payment } from 'src/payment/entity/payment.entity';
import { Account } from './account.entity';
export declare class User {
    id: number;
    loginId: string;
    password: string;
    name: string;
    verifiedEmail: string;
    accounts: Account[];
    payments: Payment[];
    static create(loginId: string, name: string, password: string): User;
}
