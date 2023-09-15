import { DataSource } from 'typeorm';
import { CreatePropertys1694697490262 } from './migrations/1694697490262-CreatePropertys';
import Property from '@modules/propertys/infra/typeorm/entities/Property';
import User from '@modules/users/infra/typeorm/entities/User';
import { CreateUser1694731368497 } from './migrations/1694731368497-CreateUser';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import { CreateUserToken1694797035013 } from './migrations/1694797035013-CreateUserToken';
import { AddUserIdToProperty1694797329923 } from './migrations/1694797329923-AddUserIdToProperty';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'agrovalor',
  entities: [Property, User, UserToken],
  migrations: [
    CreatePropertys1694697490262,
    CreateUser1694731368497,
    CreateUserToken1694797035013,
    AddUserIdToProperty1694797329923,
  ],
});
