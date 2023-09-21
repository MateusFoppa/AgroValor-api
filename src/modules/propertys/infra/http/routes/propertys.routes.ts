import { Router } from 'express';
import PropertyController from '../controllers/PropertyController';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
import validator from '@shared/infra/http/middlewares/validator';
import { createPropertySchema } from '@modules/propertys/domain/schema/createproperty';
import { updatePropertySchema } from '@modules/propertys/domain/schema/updatePropertySchema';
import { paramsIdSchema } from '@modules/users/domain/schema/paramsId';
const propertyRouter = Router();
const propertyController = new PropertyController();

propertyRouter.use(isAuthenticated);

propertyRouter.get('/user', propertyController.listAll);
propertyRouter.post(
  '/',
  validator(createPropertySchema),
  propertyController.create,
);
propertyRouter.get(
  '/user/:id',
  validator(paramsIdSchema),
  propertyController.show,
);
propertyRouter.put(
  '/:id',
  validator(updatePropertySchema),
  propertyController.update,
);
propertyRouter.delete(
  '/:id',
  validator(paramsIdSchema),
  propertyController.delete,
);

export default propertyRouter;
