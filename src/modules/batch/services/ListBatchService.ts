import { inject, injectable } from 'tsyringe';
import { IBatchRepository } from '../domain/repositories/IBatchRepository';
import { IListBatch } from '../domain/models/IListBatch';
import { BadRequestError } from '@shared/errors/bad-request';

@injectable()
class ListBatchService {
  constructor(
    @inject('BatchRepository')
    private batchRepository: IBatchRepository,
  ) {
    if (!batchRepository) {
      throw new Error('BatchRepository is required.');
    }
  }

  public async execute(property_Id: string): Promise<IListBatch> {
    const batch = await this.batchRepository.findById(property_Id);

    if (!batch) {
      throw new BadRequestError('Property does not exists.');
    }

    const batchs = await this.batchRepository.findAll(property_Id);

    return batchs;
  }
}

export default ListBatchService;
