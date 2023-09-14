import { DataSource } from 'typeorm';
import { CreatePropertys1694697490262 } from './migrations/1694697490262-CreatePropertys';
import Property from '@modules/propertys/typeorm/entities/Property';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'agrovalor',
  entities: [Property],
  migrations: [CreatePropertys1694697490262],
});
