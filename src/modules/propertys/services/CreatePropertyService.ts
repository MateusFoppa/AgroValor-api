import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { ICreateProperty } from '../domain/models/ICreateProperty';
import IPropertyRepository from '../domain/repositories/IPropertyRepository';
import { IProperty } from '../domain/models/IProperty';

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
    // user_id,
    total_area,
    cultivated_area,
    city,
    state,
  }: ICreateProperty): Promise<IProperty> {
    const propertyExists = await this.propertyRepository.findByName(name);

    if (propertyExists) {
      throw new AppError('There is already one property with this name');
    }

    const property = await this.propertyRepository.create({
      name,
      // user_id,
      total_area,
      cultivated_area,
      city,
      state,
    });

    return property;
  }
}

export default CreatePropertyService;
