/* eslint-disable no-unused-vars */
import { IBatch } from '../models/IBatch';
import { ICreateBatch } from '../models/ICreateBatch';
import { IListBatch } from '../models/IListBatch';

export interface IBatchRepository {
  getReportFinanceForBatch(batch_id: string): unknown;
  findAll(property_Id: string): Promise<IListBatch>;
  findByName(name: string, property_id: string): Promise<IBatch | null>;
  findByIds(batch_id: string, property_id: string): Promise<IBatch | null>;
  findById(id: string): Promise<IBatch | null>;
  create(data: ICreateBatch): Promise<IBatch>;
  save(batch: IBatch): Promise<IBatch>;
  remove(batch: IBatch): Promise<void>;
}
