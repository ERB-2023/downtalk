import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PaymentModule } from './payment/payment.module';
import { CoinModule } from './coin/coin.module';
import { DatabaseModule } from './database/database.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter'

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule, 
    AuthModule, 
    PaymentModule, 
    CoinModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'root',
      database: 'test',
      entities: [
          __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
