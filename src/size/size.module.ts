import { Module } from '@nestjs/common';
import { SizeController } from './size.controller';
import { SizeService } from './size.service';

@Module({
  controllers: [SizeController],
  providers: [SizeService]
})
export class SizeModule {}
