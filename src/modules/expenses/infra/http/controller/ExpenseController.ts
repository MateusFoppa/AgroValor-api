import CreateExpenseService from '@modules/expenses/services/CreateExpenseService';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';

export default class ExpenseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      data_pgto,
    } = request.body;
    const batch_id = request.params.batch_id;

    const createExpense = container.resolve(CreateExpenseService);

    const expense = await createExpense.execute({
      batch_id,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      data_pgto,
    });

    return response.status(StatusCodes.CREATED).json(expense);
  }
}
