import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@shared/errors/bad-request';
import { IProductionRepository } from '../domain/repositories/IProductionRepository';
import { IUpdateProduction } from '../domain/models/IUpdateProduction';
import { IProduction } from '../domain/models/IProduction';

@injectable()
class UpdateProductionService {
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
    category,
    item,
    unit_of,
    quantity,
    value_unit,
    value_total,
    receipt_date,
  }: IUpdateProduction): Promise<IProduction> {
    const productionExists = await this.productionRepository.findByIds(
      production_id,
      batch_id,
    );

    if (!productionExists) {
      throw new BadRequestError('production not exist.');
    }

    productionExists.category = category;
    productionExists.item = item;
    productionExists.unit_of = unit_of;
    productionExists.quantity = quantity;
    productionExists.value_unit = value_unit;
    productionExists.value_total = value_total;
    productionExists.receipt_date = receipt_date;

    const production = await this.productionRepository.save(productionExists);

    return production;
  }
}

export default UpdateProductionService;
