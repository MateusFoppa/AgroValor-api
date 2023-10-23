/* eslint-disable no-unused-vars */
import { ICreateExpenses } from '../models/ICreateExpenses';
import { IExpenses } from '../models/IExpenses';
import { IListExpenses } from '../models/iListExpenses';

export interface IExpensesRepository {
  findAll(batch_id: string): Promise<IListExpenses>;
  findByName(name: string, batch_id: string): Promise<IExpenses | null>;
  findByIds(expense_id: string, batch_id: string): Promise<IExpenses | null>;
  findById(id: string): Promise<IExpenses | null>;
  create(data: ICreateExpenses): Promise<IExpenses>;
  save(expense: IExpenses): Promise<IExpenses>;
  remove(expense: IExpenses): Promise<void>;
}
