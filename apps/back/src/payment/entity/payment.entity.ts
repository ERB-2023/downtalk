import { Coin } from 'src/coin/entity/coin.entity';
import { User } from 'src/user/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { PAYMENT_STATUS } from '../enum/payment-status.enum';
import { PAYMENT_TYPE } from '../enum/payment-type.enum';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  account: number;

  @Column({
    type: "enum",
    enum: PAYMENT_TYPE,
    nullable: false
  })
  type: string;

  @Column({
    type: "enum",
    enum: PAYMENT_STATUS,
    default: PAYMENT_STATUS.READY
  })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(type => User, (user) => user.payments)
  user: User;

  @ManyToOne(type => Coin, (coin) => coin.payments)
  coin: Coin;
}