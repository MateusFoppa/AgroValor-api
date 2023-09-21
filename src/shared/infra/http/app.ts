import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import '@shared/infra/typeorm';
import '@shared/container';
import errorHandlerMiddleware from './middlewares/error-handler';

const app = express();

app.use(cors());
app.use(express.json());
<<<<<<< Updated upstream
=======
app.use(express.urlencoded({ extended: true }));
>>>>>>> Stashed changes

app.use(routes);

app.use(errorHandlerMiddleware);

export default app;
