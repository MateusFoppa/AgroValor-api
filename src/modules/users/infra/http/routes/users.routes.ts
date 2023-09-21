import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
import validator from '@shared/infra/http/middlewares/validator';
import { paramsIdSchema } from '@modules/users/domain/schema/paramsId';
import { createUserSchema } from '@modules/users/domain/schema/createUser';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', isAuthenticated, usersController.index);

usersRouter.get('/:id', validator(paramsIdSchema), usersController.show);

usersRouter.post('/', validator(createUserSchema), usersController.create);

export default usersRouter;
