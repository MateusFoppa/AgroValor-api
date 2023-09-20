import { Router } from 'express';
import BatchController from '../controller/BatchController';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';

const batchRouter = Router();
const batchController = new BatchController();

batchRouter.use(isAuthenticated);

batchRouter.get('/:property_id/area/:area_id', batchController.show);

batchRouter.get('/:property_id', batchController.index);

batchRouter.post('/:property_id', batchController.create);

batchRouter.put('/:property_id/area/:area_id', batchController.update);

batchRouter.delete('/:property_id/area/:area_id', batchController.delete);

export default batchRouter;
