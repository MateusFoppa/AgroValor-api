import { inject, injectable } from 'tsyringe';

import { IExpensesRepository } from '../domain/repositories/IExpensesRepository';
import { IDeleteExpenses } from '../domain/models/IDeleteExpenses';
import CustomAPIError from '@shared/errors';

@injectable()
class DeleteExpenseService {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository,
  ) {
    if (!expensesRepository) {
      throw new Error('ExpensesRepository is required.');
    }
  }
  public async execute({
    expenses_id,
    batch_id,
  }: IDeleteExpenses): Promise<void> {
    const expense = await this.expensesRepository.findByIds(
      expenses_id,
      batch_id,
    );
    if (!expense) {
      throw new CustomAPIError.BadRequestError('Expense or Batch not exist.');
    }

    await this.expensesRepository.remove(expense);
  }
}

export default DeleteExpenseService;
