import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { ICreateBatch } from '../domain/models/ICreateBatch';
import { IBatchRepository } from '../domain/repositories/IBatchRepository';
import { IBatch } from '../domain/models/IBatch';

@injectable()
class CreateBatchService {
  constructor(
    @inject('BatchRepository')
    private batchRepository: IBatchRepository,
  ) {
    if (!batchRepository) {
      throw new Error('BatchRepository is required.');
    }
  }

  public async execute({
    name,
    property_id,
    activity,
    geographic_coordinates,
  }: ICreateBatch): Promise<IBatch> {
    const propertyExists = await this.batchRepository.findByName(
      name,
      property_id,
    );

    if (propertyExists) {
      throw new AppError('There is already one property with this name');
    }

    const batch = await this.batchRepository.create({
      name,
      property_id,
      activity,
      geographic_coordinates,
    });

    return batch;
  }
}

export default CreateBatchService;
