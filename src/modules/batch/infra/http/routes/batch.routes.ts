import { Router } from 'express';
import BatchController from '../controller/BatchController';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';

const batchRouter = Router();
const batchController = new BatchController();

batchRouter.use(isAuthenticated);

batchRouter.get('/:batch_id/property/:property_id', batchController.show);

batchRouter.get('/property/:property_id', batchController.index);

batchRouter.post('/property/:property_id', batchController.create);

batchRouter.put('/:batch_id/property/:property_id', batchController.update);

batchRouter.delete('/:batch_id/property/:property_id', batchController.delete);

batchRouter.get('/:batch_id/property/:property_id/reportfinance', batchController.financeReport);

export default batchRouter;
