import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database/database.module';
import { MockApiModule } from './mock-api/mock-api/mock-api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    DatabaseModule,
    MockApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
