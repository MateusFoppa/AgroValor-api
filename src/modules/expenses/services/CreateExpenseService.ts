import { inject, injectable } from 'tsyringe';

import { IExpensesRepository } from '../domain/repositories/IExpensesRepository';
import { IExpenses } from '../domain/models/IExpenses';
import { ICreateExpenses } from '../domain/models/ICreateExpenses';

@injectable()
class CreateExpenseService {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository,
  ) {
    if (!expensesRepository) {
      throw new Error('ExpensesRepository is required.');
    }
  }

  public async execute({
    batch_id,
    category,
    item,
    unit_of,
    quantity,
    value_unit,
    value_total,
    data_pgto,
  }: ICreateExpenses): Promise<IExpenses> {
    const expense = await this.expensesRepository.create({
      batch_id,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      data_pgto,
    });

    return expense;
  }
}

export default CreateExpenseService;
