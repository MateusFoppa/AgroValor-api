import express from 'express';
import cors from 'cors';
import routes from './routes';
import errorHandlerMiddleware from './middlewares/error-handler';
import 'express-async-errors';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorHandlerMiddleware);

export default app;
