import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandlerMiddleware from './middlewares/error-handler';
import '@shared/infra/typeorm';
import '@shared/container';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(errorHandlerMiddleware);

export default app;
