import { DataSource } from 'typeorm';
import { CreatePropertys1694697490262 } from './migrations/1694697490262-CreatePropertys';
import Property from '@modules/propertys/infra/typeorm/entities/Property';
import User from '@modules/users/infra/typeorm/entities/User';
import { CreateUser1694731368497 } from './migrations/1694731368497-CreateUser';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'agrovalor',
  entities: [Property, User],
  migrations: [CreatePropertys1694697490262, CreateUser1694731368497],
});
