import { Router } from 'express';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
import ProductionController from '../controller/ProductionController';

const productionRouter = Router();
const productionController = new ProductionController();

productionRouter.use(isAuthenticated);

productionRouter.get('/batch/:batch_id', productionController.index);
productionRouter.post('/batch/:batch_id', productionController.create);
productionRouter.put(
  '/:production_id/batch/:batch_id',
  productionController.update,
);
productionRouter.delete(
  '/:production_id/batch/:batch_id',
  productionController.delete,
);
productionRouter.get(
  '/:production_id/batch/:batch_id',
  productionController.show,
);

export default productionRouter;
