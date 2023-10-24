import { inject, injectable } from 'tsyringe';
import { ICreateProduction } from '../domain/models/ICreateProduction';
import { IProduction } from '../domain/models/IProduction';
import { IProductionRepository } from '../domain/repositories/IProductionRepository';

@injectable()
class CreateProductionService {
  constructor(
    @inject('ProductionRepository')
    private productionRepository: IProductionRepository,
  ) {
    if (!productionRepository) {
      throw new Error('ProductionRepository is required.');
    }
  }

  public async execute({
    batch_id,
    category,
    item,
    unit_of,
    quantity,
    value_unit,
    value_total,
    receipt_date,
  }: ICreateProduction): Promise<IProduction> {
    const production = await this.productionRepository.create({
      batch_id,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      receipt_date,
    });

    return production;
  }
}

export default CreateProductionService;
