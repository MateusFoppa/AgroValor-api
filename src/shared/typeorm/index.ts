import { DataSource } from 'typeorm';
import { CreatePropertys1694697490262 } from './migrations/1694697490262-CreatePropertys';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'agrovalor',
  migrations: [CreatePropertys1694697490262],
});
