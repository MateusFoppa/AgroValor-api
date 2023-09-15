import { Router } from 'express';
import PropertyController from '../controllers/PropertyController';

const propertyRouter = Router();
const propertyController = new PropertyController();

propertyRouter.post('/', propertyController.create);

export default propertyRouter;
