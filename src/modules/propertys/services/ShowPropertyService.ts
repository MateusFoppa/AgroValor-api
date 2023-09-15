import { inject, injectable } from 'tsyringe';
import { IPropertyRepository } from '../domain/repositories/IPropertyRepository';
import { IProperty } from '../domain/models/IProperty';
import CustomAPIError from '@shared/errors';

@injectable()
class showPropertyService {
  constructor(
    @inject('PropertyRepository')
    private propertysRepository: IPropertyRepository,
  ) {
    if (!propertysRepository) {
      throw new Error('PropertyRepository is required.');
    }
  }

  public async execute(
    user_Id: string,
    property_Id: string,
  ): Promise<IProperty | null> {
    const property = await this.propertysRepository.findByIds(
      user_Id,
      property_Id,
    );
    if (!property) {
      throw new CustomAPIError.BadRequestError('Property not exist.');
    }

    return property;
  }
}

export default showPropertyService;
