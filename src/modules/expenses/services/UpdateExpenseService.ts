import { inject, injectable } from 'tsyringe';

import { IExpensesRepository } from '../domain/repositories/IExpensesRepository';
import { IExpenses } from '../domain/models/IExpenses';
import { IUpdateExpenses } from '../domain/models/IUpdateExpenses';
import { BadRequestError } from '@shared/errors/bad-request';

@injectable()
class UpdateExpenseService {
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
    category,
    item,
    unit_of,
    quantity,
    value_unit,
    value_total,
    data_pgto,
  }: IUpdateExpenses): Promise<IExpenses> {
    const expenseExists = await this.expensesRepository.findByIds(
      expenses_id,
      batch_id,
    );

    if (!expenseExists) {
      throw new BadRequestError('Expense not exist.');
    }

    expenseExists.category = category;
    expenseExists.item = item;
    expenseExists.unit_of = unit_of;
    expenseExists.quantity = quantity;
    expenseExists.value_unit = value_unit;
    expenseExists.value_total = value_total;
    expenseExists.data_pgto = data_pgto;

    const expense = await this.expensesRepository.save(expenseExists);

    return expense;
  }
}

export default UpdateExpenseService;
