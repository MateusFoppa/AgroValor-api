import { container } from 'tsyringe';
import { IPropertyRepository } from '@modules/propertys/domain/repositories/IPropertyRepository';
import PropertyRepository from '@modules/propertys/infra/typeorm/repositories/PropertyRepository';
import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import '@modules/users/providers';
import { IBatchRepository } from '@modules/batch/domain/repositories/IBatchRepository';
import BatchRepository from '@modules/batch/infra/typeorm/repositories/BatchRepository';
import { IExpensesRepository } from '@modules/expenses/domain/repositories/IExpensesRepository';
import ExpensesRepository from '@modules/expenses/infra/typeorm/repositories/ExpensesRepository';
import { IProductionRepository } from '@modules/production/domain/repositories/IProductionRepository';
import ProductionRepository from '@modules/production/infra/typeorm/repositories/ProductionRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<IPropertyRepository>(
  'PropertyRepository',
  PropertyRepository,
);

container.registerSingleton<IBatchRepository>(
  'BatchRepository',
  BatchRepository,
);

container.registerSingleton<IExpensesRepository>(
  'ExpensesRepository',
  ExpensesRepository,
);

container.registerSingleton<IProductionRepository>(
  'ProductionRepository',
  ProductionRepository,
);
