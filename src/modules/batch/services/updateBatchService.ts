import { inject, injectable } from 'tsyringe';
import { IUpdateBatch } from '../domain/models/IUpdateBatch';
import { IBatchRepository } from '../domain/repositories/IBatchRepository';
import { IBatch } from '../domain/models/IBatch';
import CustomAPIError from '@shared/errors';

@injectable()
class UpdateBatchService {
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
    batch_id,
    property_id,
    activity,
    geographic_coordinates,
  }: IUpdateBatch): Promise<IBatch> {
    const batchExists = await this.batchRepository.findByIds(
      property_id,
      batch_id,
    );

    if (!batchExists) {
      throw new CustomAPIError.BadRequestError('Batch not exist.');
    }

    batchExists.name = name;
    batchExists.activity = activity;
    batchExists.geographic_coordinates = geographic_coordinates;

    const batch = await this.batchRepository.save(batchExists);

    return batch;
  }
}

export default UpdateBatchService;
