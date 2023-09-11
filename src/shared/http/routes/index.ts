import { Router } from 'express';

const routes = Router();

routes.get(
  '/',
  (_request: any, response: { json: (arg0: { message: string }) => any }) => {
    return response.json({ message: 'Hello Dev!' });
  },
);

export default routes;
