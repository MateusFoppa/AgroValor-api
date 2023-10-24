import batchRouter from '@modules/batch/infra/http/routes/batch.routes';
import expenseRouter from '@modules/expenses/infra/http/routes/expense.routes';
import productionRouter from '@modules/production/infra/http/routes/production.routes';
import propertyRouter from '@modules/propertys/infra/http/routes/propertys.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/production', productionRouter);
routes.use('/expense', expenseRouter);
routes.use('/batch', batchRouter);
routes.use('/property', propertyRouter);
routes.use('/user', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);

export default routes;
