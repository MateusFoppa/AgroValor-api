import { DataSource } from 'typeorm';
import { CreatePropertys1694697490262 } from './migrations/1694697490262-CreatePropertys';
import Property from '@modules/propertys/infra/typeorm/entities/Property';
import User from '@modules/users/infra/typeorm/entities/User';
import { CreateUser1694731368497 } from './migrations/1694731368497-CreateUser';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Batch from '@modules/batch/infra/typeorm/entities/Batch';
import { CreateBatch1694809349794 } from './migrations/1694809349794-CreateBatch';
import Expenses from '@modules/expenses/infra/typeorm/entities/Expense';
import { CreateExpenses1698083579742 } from './migrations/1698083579742-CreateExpenses';
import { CreateProduction1698171116379 } from './migrations/1698171116379-CreateProduction';
import Production from '@modules/production/infra/typeorm/entities/Production';
import { CreateDatabaseAgrovalor1698406991085 } from './migrations/1698406991085-CreateDatabaseAgrovalor';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'agrovalor',
  entities: [Property, User, UserToken, Batch, Expenses, Production],
  migrations: [
    CreateDatabaseAgrovalor1698406991085,
    CreatePropertys1694697490262,
    CreateUser1694731368497,
    CreateBatch1694809349794,
    CreateExpenses1698083579742,
    CreateProduction1698171116379,
  ],
});
