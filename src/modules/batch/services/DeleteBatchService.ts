import { inject, injectable } from 'tsyringe';
import { IBatchRepository } from '../domain/repositories/IBatchRepository';
import { BadRequestError } from '@shared/errors/bad-request';
import { IDeleteBatch } from '../domain/models/IDeleteBatch';

@injectable()
class DeleteBatchService {
  constructor(
    @inject('BatchRepository')
    private batchRepository: IBatchRepository,
  ) {
    if (!batchRepository) {
      throw new Error('BatchRepository is required.');
    }
  }
  public async execute({ property_id, batch_id }: IDeleteBatch): Promise<void> {
    const batch = await this.batchRepository.findByIds(property_id, batch_id);
    if (!batch) {
      throw new BadRequestError('Property or Batch not exist.');
    }

    await this.batchRepository.remove(batch);
  }
}

export default DeleteBatchService;
