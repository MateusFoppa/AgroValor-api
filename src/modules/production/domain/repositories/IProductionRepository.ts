/* eslint-disable no-unused-vars */
import { ICreateProduction } from '../models/ICreateProduction';
import { IListProduction } from '../models/IListProduction';
import { IProduction } from '../models/IProduction';

export interface IProductionRepository {
  findAll(batch_id: string): Promise<IListProduction>;
  findByName(name: string, batch_id: string): Promise<IProduction | null>;
  findByIds(expense_id: string, batch_id: string): Promise<IProduction | null>;
  findById(id: string): Promise<IProduction | null>;
  create(data: ICreateProduction): Promise<IProduction>;
  save(production: IProduction): Promise<IProduction>;
  remove(production: IProduction): Promise<void>;
}
