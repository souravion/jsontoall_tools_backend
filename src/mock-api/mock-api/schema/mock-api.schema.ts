import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';



@Schema({ timestamps: true, collection: 'MockApi'  })
export class MockApi {
  // Stores the structure of the fake API (like JSON schema definition)
  @Prop({ type: SchemaTypes.Mixed, required: true })
  schema: Record<string, any>;

  // Stores generated fake data (array of JSON objects)
  @Prop({ type: [SchemaTypes.Mixed], required: true })
  data: Record<string, any>[];

  // Unique ID for sharing the mock API
  @Prop({ required: true, unique: true })
  shareId: string;

  @Prop()
  records?: number;
  // TTL index → document auto-deletes after 24h
  // @Prop({ default: Date.now, expires: 60 * 60 * 24 })
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;


  @Prop({ default: 0 })
  hitCount: number;

  @Prop({ default: 500 }) // max hits allowed
  maxHits: number;
}

 
export const MockApiSchema = SchemaFactory.createForClass(MockApi);
MockApiSchema.index({ "createdAt": 1 }, { expireAfterSeconds: 86400 }); // Expire logs after 24 hours

export type MockApiDocument = HydratedDocument<MockApi>;

