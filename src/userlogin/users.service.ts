import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/role.enum';

export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'film',
      password: '064film',
      roles: [Role.Admin] as Role[],
    },
    {
      userId: 2,
      username: 'Aor',
      password: '012aor',
      roles: [Role.User] as Role[],
    },
  ];
    
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);

  }
  
}