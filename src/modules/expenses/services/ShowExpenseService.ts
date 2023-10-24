import { inject, injectable } from 'tsyringe';
import { BadRequestError } from '@shared/errors/bad-request';
import { IExpensesRepository } from '../domain/repositories/IExpensesRepository';
import { IShowExpenses } from '../domain/models/IShowExpenses';
import { IExpenses } from '../domain/models/IExpenses';

@injectable()
class ShowExpenseService {
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
  }: IShowExpenses): Promise<IExpenses | null> {
    const expense = await this.expensesRepository.findByIds(
      expenses_id,
      batch_id,
    );

    if (!expense) {
      throw new BadRequestError('Batch or expense does not exists.');
    }

    return expense;
  }
}

export default ShowExpenseService;
