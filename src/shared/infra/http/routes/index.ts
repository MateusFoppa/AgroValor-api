import propertyRouter from '@modules/propertys/infra/http/routes/propertys.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/property', propertyRouter);

export default routes;
