import { Router } from 'express';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
import ExpenseController from '../controller/ExpenseController';

const expenseRouter = Router();
const expenseController = new ExpenseController();

expenseRouter.use(isAuthenticated);

expenseRouter.post('/batch/:batch_id', expenseController.create);

export default expenseRouter;
