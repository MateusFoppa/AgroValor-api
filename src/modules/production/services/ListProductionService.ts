import { inject, injectable } from 'tsyringe';
import { BadRequestError } from '@shared/errors/bad-request';
import { IProductionRepository } from '../domain/repositories/IProductionRepository';
import { IListProduction } from '../domain/models/IListProduction';

@injectable()
class ListProductionService {
  constructor(
    @inject('ProductionRepository')
    private productionRepository: IProductionRepository,
  ) {
    if (!productionRepository) {
      throw new Error('ProductionRepository is required.');
    }
  }
  public async execute(batch_id: string): Promise<IListProduction> {
    const production = await this.productionRepository.findById(batch_id);

    if (!production) {
      throw new BadRequestError('Batch does not exists.');
    }

    const productions = await this.productionRepository.findAll(batch_id);

    return productions;
  }
}

export default ListProductionService;
