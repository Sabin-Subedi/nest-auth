import { Role } from 'src/users/enums/role.enums';
import { Permission } from '../authorization/permission.type';

export interface ActiveUserData {
  sub: number;
  email: string;
  role: Role;
  permissions: Permission[];
}
