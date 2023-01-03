import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule, 
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      // imports: [ConfigModule],
      // inject: [ConfigService],
      useFactory: async (
        // configService: ConfigService
      ) => ({
        secret: "downbit",
        signOptions: {
          expiresIn: 0,
        },
      }),
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
