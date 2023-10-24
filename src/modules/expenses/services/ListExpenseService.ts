import { inject, injectable } from 'tsyringe';
import { BadRequestError } from '@shared/errors/bad-request';
import { IExpensesRepository } from '../domain/repositories/IExpensesRepository';
import { IListExpenses } from '../domain/models/IListExpenses';

@injectable()
class ListExpenseService {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository,
  ) {
    if (!expensesRepository) {
      throw new Error('ExpensesRepository is required.');
    }
  }
  public async execute(batch_id: string): Promise<IListExpenses> {
    const expense = await this.expensesRepository.findById(batch_id);

    if (!expense) {
      throw new BadRequestError('Batch does not exists.');
    }

    const expenses = await this.expensesRepository.findAll(batch_id);

    return expenses;
  }
}

export default ListExpenseService;
