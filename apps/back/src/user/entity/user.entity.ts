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

  static create(loginId: string, name: string, password:string) {
    const user = new User();
    user.loginId = loginId;
    user.name = name;
    user.password = password;
    return user;
  }
}