import { Payment } from 'src/payment/entity/payment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Account } from './account.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loginId: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  verifiedEmail: string;

  @OneToMany(type => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(type => Payment, (payment) => payment.user)
  payments: Payment[];
}