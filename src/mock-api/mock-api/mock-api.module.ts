import { Module } from '@nestjs/common';
import { MockApiService } from './mock-api.service';
import { MockApiController } from './mock-api.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MockApi, MockApiSchema } from './schema/mock-api.schema';

@Module({
  imports:[
   MongooseModule.forFeature([{ name: MockApi.name, schema: MockApiSchema }]),
  ],
  providers: [MockApiService],
  controllers: [MockApiController],
  exports:[MockApiService]
})
export class MockApiModule {}
