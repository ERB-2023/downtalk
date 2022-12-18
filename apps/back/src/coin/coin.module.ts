import { Module } from '@nestjs/common';
import { CoinService } from './coin.service';
import { CoinController } from './coin.controller';

@Module({
  providers: [CoinService],
  controllers: [CoinController]
})
export class CoinModule {}
