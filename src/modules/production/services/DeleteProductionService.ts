import { inject, injectable } from 'tsyringe';

import CustomAPIError from '@shared/errors';
import { IProductionRepository } from '../domain/repositories/IProductionRepository';
import { IDeleteProduction } from '../domain/models/IDeleteProduction';

@injectable()
class DeleteProductionService {
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
  }: IDeleteProduction): Promise<void> {
    const production = await this.productionRepository.findByIds(
      production_id,
      batch_id,
    );
    if (!production) {
      throw new CustomAPIError.BadRequestError(
        'Production or Batch not exist.',
      );
    }

    await this.productionRepository.remove(production);
  }
}

export default DeleteProductionService;
