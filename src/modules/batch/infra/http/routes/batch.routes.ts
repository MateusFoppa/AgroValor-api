import { Router } from 'express';
import BatchController from '../controller/BatchController';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
import validator from '@shared/infra/http/middlewares/validator';
import { createBatchSchema } from '@modules/batch/domain/schema/createBatch';
import { updateBatchSchema } from '@modules/batch/domain/schema/updateBatchSchema';
import { propertyIAndBatchIdSchema } from '@modules/batch/domain/schema/propertyIdAndBatchIdSchema';
import { propertyIdSchema } from '@modules/batch/domain/schema/propertyIdSchema';

const batchRouter = Router();
const batchController = new BatchController();

batchRouter.use(isAuthenticated);

batchRouter.get(
  '/:batch_id/property/:property_id',
  validator(propertyIAndBatchIdSchema),
  batchController.show,
);

batchRouter.get(
  '/property/:property_id',
  validator(propertyIdSchema),
  batchController.index,
);

batchRouter.post(
  '/property/:property_id',
  validator(createBatchSchema),
  batchController.create,
);

batchRouter.put(
  '/:batch_id/property/:property_id',
  validator(updateBatchSchema),
  batchController.update,
);

batchRouter.delete(
  '/:batch_id/property/:property_id',
  validator(propertyIAndBatchIdSchema),
  batchController.delete,
);

export default batchRouter;
