import { Repository } from 'typeorm';
import Expenses from '../entities/Expense';
import { IExpensesRepository } from '@modules/expenses/domain/repositories/IExpensesRepository';
import { dataSource } from '@shared/infra/typeorm';
import { IListExpenses } from '@modules/expenses/domain/models/IListExpenses';
import { IExpenses } from '@modules/expenses/domain/models/IExpenses';
import { ICreateExpenses } from '@modules/expenses/domain/models/ICreateExpenses';

class ExpensesRepository implements IExpensesRepository {
  private ormRepository: Repository<Expenses>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Expenses);
  }

  public async findAll(batch_id: string): Promise<IListExpenses> {
    const expenses = await this.ormRepository.find({ where: { batch_id } });
    const result: IListExpenses = { data: expenses };
    return result;
  }

  public async findByName(batch_id: string): Promise<IExpenses | null> {
    const expense = await this.ormRepository.findOne({
      where: { batch_id },
    });
    return expense || null;
  }

  public async findByIds(
    expense_id: string,
    batch_id: string,
  ): Promise<IExpenses | null> {
    const expense = await this.ormRepository.findOne({
      where: { id: expense_id, batch_id },
    });
    return expense;
  }

  public async findById(id: string): Promise<IExpenses | null> {
    const expense = await this.ormRepository.findOneBy({
      id,
    });
    return expense;
  }

  public async create(data: ICreateExpenses): Promise<IExpenses> {
    const expense = this.ormRepository.create(data);
    await this.ormRepository.save(expense);
    return expense;
  }

  public async save(expense: IExpenses): Promise<IExpenses> {
    await this.ormRepository.save(expense);
    return expense;
  }

  public async remove(expense: Expenses): Promise<void> {
    await this.ormRepository.remove(expense);
  }
}

export default ExpensesRepository;
