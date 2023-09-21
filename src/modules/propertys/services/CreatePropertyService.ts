import { inject, injectable } from 'tsyringe';
import { ICreateProperty } from '../domain/models/ICreateProperty';
import { IPropertyRepository } from '../domain/repositories/IPropertyRepository';
import { IProperty } from '../domain/models/IProperty';
import CustomAPIError from '@shared/errors';

@injectable()
class CreatePropertyService {
  constructor(
    @inject('PropertyRepository')
    private propertyRepository: IPropertyRepository,
  ) {
    if (!propertyRepository) {
      throw new Error('PropertyRepository is required.');
    }
  }

  public async execute({
    name,
    user_id,
    total_area,
    cultivated_area,
    city,
    state,
  }: ICreateProperty): Promise<IProperty> {
    const propertyExists = await this.propertyRepository.findByName(name);

    if (propertyExists) {
      throw new CustomAPIError.BadRequestError(
        'There is already one property with this name',
      );
    }

    const property = await this.propertyRepository.create({
      name,
      user_id,
      total_area,
      cultivated_area,
      city,
      state,
    });

    return property;
  }
}

export default CreatePropertyService;
