import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as AppConfigModule } from '@nestjs/config';

@Module({
  providers: [ConfigService],
  imports:[ AppConfigModule.forRoot({
      isGlobal: true, // available everywhere
      envFilePath: '.env',
    }),]
})
export class ConfigModule {}
