import { Repository } from 'typeorm';
import { dataSource } from '@shared/infra/typeorm';
import { IProductionRepository } from '@modules/production/domain/repositories/IProductionRepository';
import { IListProduction } from '@modules/production/domain/models/IListProduction';
import { IProduction } from '@modules/production/domain/models/IProduction';
import Production from '../entities/Production';
import { ICreateProduction } from '@modules/production/domain/models/ICreateProduction';

class ProductionRepository implements IProductionRepository {
  private ormRepository: Repository<Production>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Production);
  }

  public async findAll(batch_id: string): Promise<IListProduction> {
    const production = await this.ormRepository.find({ where: { batch_id } });
    const result: IListProduction = { data: production };
    return result;
  }

  public async findByName(batch_id: string): Promise<IProduction | null> {
    const production = await this.ormRepository.findOne({
      where: { batch_id },
    });
    return production || null;
  }

  public async findByIds(
    production_id: string,
    batch_id: string,
  ): Promise<IProduction | null> {
    const production = await this.ormRepository.findOne({
      where: { id: production_id, batch_id },
    });
    return production;
  }

  public async findById(batch_id: string): Promise<IProduction | null> {
    const production = await this.ormRepository.findOneBy({
      batch_id,
    });
    return production;
  }

  public async create(data: ICreateProduction): Promise<IProduction> {
    const production = this.ormRepository.create(data);
    await this.ormRepository.save(production);
    return production;
  }

  public async save(production: IProduction): Promise<IProduction> {
    await this.ormRepository.save(production);
    return production;
  }

  public async remove(production: Production): Promise<void> {
    await this.ormRepository.remove(production);
  }
}

export default ProductionRepository;
