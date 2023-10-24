import CreateExpenseService from '@modules/expenses/services/CreateExpenseService';
import ListExpenseService from '@modules/expenses/services/ListExpenseService';
import UpdateExpenseService from '@modules/expenses/services/UpdateExpenseService';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';

export default class ExpenseController {
  public async index(request: Request, response: Response): Promise<Response> {
    const batch_id = request.params.batch_id;

    const ListExpenses = container.resolve(ListExpenseService);
    const expenses = await ListExpenses.execute(batch_id);

    return response.status(StatusCodes.OK).json(expenses);
  }

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

  public async update(request: Request, response: Response): Promise<Response> {
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
    const expenses_id = request.params.expense_id;

    const updateExpense = container.resolve(UpdateExpenseService);

    const expense = await updateExpense.execute({
      expenses_id,
      batch_id,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      data_pgto,
    });

    return response.status(StatusCodes.OK).json(expense);
  }
}
