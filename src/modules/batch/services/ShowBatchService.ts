import { inject, injectable } from 'tsyringe';
import { IBatchRepository } from '../domain/repositories/IBatchRepository';
import { BadRequestError } from '@shared/errors/bad-request';
import { IBatch } from '../domain/models/IBatch';
import { IShowBatch } from '../domain/models/IShowBatch';

@injectable()
class ShowBatchService {
  constructor(
    @inject('BatchRepository')
    private batchRepository: IBatchRepository,
  ) {
    if (!batchRepository) {
      throw new Error('BatchRepository is required.');
    }
  }
  public async execute({
    property_id,
    batch_id,
  }: IShowBatch): Promise<IBatch | null> {
    const batch = await this.batchRepository.findByIds(property_id, batch_id);
    if (!batch) {
      throw new BadRequestError('Property or Batch not exist.');
    }

    return batch;
  }
}

export default ShowBatchService;
