import { Body, Controller, ForbiddenException, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { MockApiService } from './mock-api.service';
import { MockApi, MockApiDocument } from './schema/mock-api.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Controller('mock-api')
export class MockApiController {
    constructor(
        private readonly mockApiService: MockApiService,
        @InjectModel(MockApi.name) private mockApiModel: Model<MockApiDocument>
    ) {}


    @Post('generate')
    async generate(@Body() body: { jsonSchema: object; records: number }) {
        const data = this.mockApiService.generateMockData(body.jsonSchema, body.records);

        const newMock = new this.mockApiModel({
        schema: body.jsonSchema,
        records: body.records,
        data,
        shareId: uuidv4(), // generate unique ID
        });

        const saved = await newMock.save();
        // Return shareable API link
        return {
        apiUrl: `/mock-api/share/${saved.shareId}`,
        preview: data,
        };
    }

@Get('share/:shareId')
async getMock(@Param('shareId') shareId: string) {
  // Step 1: Find the document
  const mock = await this.mockApiModel.findOne({ shareId }).exec();

  if (!mock) {
    // Either TTL expired or shareId never existed
    throw new NotFoundException('This share link has expired or does not exist.');
  }

  // Step 2: Check if max hits reached
  if (mock.hitCount >= (mock.maxHits ?? 100)) {
    throw new ForbiddenException('This share link has reached the maximum number of views.');
  }

  // Step 3: Increment hit count atomically
  const updatedMock:any = await this.mockApiModel.findOneAndUpdate(
    { _id: mock._id, hitCount: { $lt: mock.maxHits ?? 100 } },
    { $inc: { hitCount: 1 } },
    { new: true }
  );

  // Step 4: Return data
  return {
    schema: updatedMock.schema,
    data: updatedMock.data,
    hitCount: updatedMock.hitCount,
  };
}

}
