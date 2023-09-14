import 'reflect-metadata';
import { dataSource } from '../typeorm';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import errorHandlerMiddleware from './middlewares/error-handler';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorHandlerMiddleware);

dataSource.initialize().then(() => {
  app.listen(3333, () => {
    console.log('Server starter o port 3333! 👍');
  });
});
