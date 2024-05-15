import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingService {
  abstract hashValue(value: string): Promise<string>;
  abstract compareValues(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean>;
}
