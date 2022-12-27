import { Payment } from 'src/payment/entity/payment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Coin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  shortName: string;

  @OneToMany(type => Payment, (payment) => payment.coin)
  payments: Payment[];
}