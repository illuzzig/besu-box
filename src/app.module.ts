import { Module } from '@nestjs/common';
import { MetaCoinModule } from './metacoin/metacoin.module';

@Module({
    imports: [MetaCoinModule],
  })
export class AppModule {}
