import { inject, injectable } from 'tsyringe';
import { IPropertyRepository } from '../domain/repositories/IPropertyRepository';
import { IPropertyAllOfUser } from '../domain/models/IPropertyAllOfUser';

@injectable()
class ListPropertyService {
  constructor(
    @inject('PropertyRepository')
    private propertysRepository: IPropertyRepository,
  ) {
    if (!propertysRepository) {
      throw new Error('PropertyRepository is required.');
    }
  }

  public async execute(user_Id: string): Promise<IPropertyAllOfUser> {
    const propertys = await this.propertysRepository.findAllOfUser(user_Id);

    return propertys;
  }
}

export default ListPropertyService;
