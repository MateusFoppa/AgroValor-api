import { inject, injectable } from 'tsyringe';
import { BadRequestError } from '@shared/errors/bad-request';
import { IProductionRepository } from '../domain/repositories/IProductionRepository';
import { IShowProduction } from '../domain/models/IShowProduction';
import { IProduction } from '../domain/models/IProduction';

@injectable()
class ShowProductionService {
  constructor(
    @inject('ProductionRepository')
    private productionRepository: IProductionRepository,
  ) {
    if (!productionRepository) {
      throw new Error('ProductionRepository is required.');
    }
  }
  public async execute({
    production_id,
    batch_id,
  }: IShowProduction): Promise<IProduction | null> {
    const production = await this.productionRepository.findByIds(
      production_id,
      batch_id,
    );

    if (!production) {
      throw new BadRequestError('Batch or production does not exists.');
    }

    return production;
  }
}

export default ShowProductionService;
