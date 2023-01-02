import { Coin } from 'src/coin/entity/coin.entity';
import { User } from 'src/user/entity/user.entity';
export declare class Payment {
    id: number;
    price: number;
    account: number;
    type: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    coin: Coin;
}
