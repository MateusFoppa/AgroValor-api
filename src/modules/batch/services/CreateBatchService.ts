import { inject, injectable } from 'tsyringe';
import { ICreateBatch } from '../domain/models/ICreateBatch';
import { IBatchRepository } from '../domain/repositories/IBatchRepository';
import CustomAPIError from '@shared/errors';
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
    const batchExists = await this.batchRepository.findByName(
      name,
      property_id,
    );

    if (batchExists) {
      throw new CustomAPIError.BadRequestError(
        'There is already one bacth with this name',
      );
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
