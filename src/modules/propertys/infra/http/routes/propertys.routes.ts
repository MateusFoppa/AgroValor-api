import { Router } from 'express';
import PropertyController from '../controllers/PropertyController';

const propertyRouter = Router();
const propertyController = new PropertyController();

propertyRouter.get('/user', propertyController.listAll);
propertyRouter.post('/', propertyController.create);

export default propertyRouter;
