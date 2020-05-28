import { Module } from '@nestjs/common';
import { MetaCoinController } from './metacoin.controller';
import { MetaCoinService } from './metacoin.service';

@Module({
  controllers: [MetaCoinController],
  providers: [MetaCoinService],
})
export class MetaCoinModule {}
