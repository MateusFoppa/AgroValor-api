import { Router } from 'express';
import PropertyController from '../controllers/PropertyController';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
const propertyRouter = Router();
const propertyController = new PropertyController();

propertyRouter.use(isAuthenticated);

propertyRouter.get('/user', propertyController.listAll);
propertyRouter.post('/', propertyController.create);
propertyRouter.get('/user/:id', propertyController.show);
propertyRouter.put('/:id', propertyController.update);
propertyRouter.delete('/:id', propertyController.delete);

export default propertyRouter;
