import { Payment } from 'src/payment/entity/payment.entity';
export declare class Coin {
    id: number;
    name: string;
    shortName: string;
    payments: Payment[];
}
