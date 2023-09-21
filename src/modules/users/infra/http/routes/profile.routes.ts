import { Router } from 'express';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
import ProfileController from '../controllers/ProfileController';
import validator from '@shared/infra/http/middlewares/validator';
import { updateProfileSchema } from '@modules/users/domain/schema/updateProfile';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(isAuthenticated);

profileRouter.get('/', profileController.show);

profileRouter.put(
  '/',
  validator(updateProfileSchema),
  profileController.update,
);

export default profileRouter;
