import { Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';
import { HashingService } from './hashing.service';

@Injectable()
export class BcryptService extends HashingService {
  async hashValue(value: string): Promise<string> {
    const salt = await genSalt(10);
    return hash(value, salt);
  }
  compareValues(data: string | Buffer, encrypted: string): Promise<boolean> {
    return compare(data, encrypted);
  }
}
