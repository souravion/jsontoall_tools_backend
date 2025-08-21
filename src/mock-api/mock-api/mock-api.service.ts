import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { generateFakeValue } from 'src/common/utils/faker.util';

@Injectable()
export class MockApiService {
  generateMockData(schema: any, records: number): any[] {
    const data: any[] = [];
    for (let i = 0; i < records; i++) {
      data.push(this.generateItem(schema));
    }
    return data;
  }

  private generateItem(schema: any): any {
    if (Array.isArray(schema)) {
      // If schema is an array, generate array items
      const itemType = schema[0]; // assume first element defines type
      const length = faker.number.int({ min: 1, max: 5 });
      return Array.from({ length }, () => this.generateItem(itemType));
    }

    if (typeof schema === 'object') {
      const item: Record<string, any> = {};
      for (const key in schema) {
        item[key] = this.generateItem(schema[key]);
      }
      return item;
    }

    // Primitive types
    return generateFakeValue(schema);
  }

}


