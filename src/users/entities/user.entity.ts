import { Permission } from 'src/iam/authorization/permission.type';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiKey } from '../api-keys/entities/api-key.entity';
import { Role } from '../enums/role.enums';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Regular,
  })
  role: Role;

  @Column({
    enum: Permission,
    default: [],
    type: 'json',
  })
  permissions: Permission[];

  @OneToMany(() => ApiKey, (apiKey) => apiKey.user)
  @JoinTable()
  apiKeys: ApiKey[];
}
