import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import { IShowUser } from '../domain/models/IShowUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import CustomAPIError from '@shared/errors';

@injectable()
class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id }: IShowUser): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new CustomAPIError.BadRequestError('User not found.');
    }

    return user;
  }
}

export default ShowUserService;
