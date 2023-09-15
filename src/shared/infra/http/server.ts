import 'reflect-metadata';
import 'dotenv/config';
import { dataSource } from '../typeorm';
import app from './app';

dataSource.initialize().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}! 🏆`);
  });
});
