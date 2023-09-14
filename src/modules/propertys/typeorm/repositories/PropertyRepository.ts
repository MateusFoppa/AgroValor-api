import { Repository } from 'typeorm';
import Property from '../entities/Property';
import { dataSource } from '@shared/typeorm';
import { IUpdateProperty } from '@modules/propertys/domain/models/IUpdateProperty';
import { ICreateProperty } from '@modules/propertys/domain/models/ICreateProperty';

class PropertyRepository {
  private ormRepository: Repository<Property>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Property);
  }
  public async create({
    name,
    user_id,
    total_area,
    cultivated_area,
    city,
    state,
  }: ICreateProperty): Promise<Property> {
    const property = this.ormRepository.create({
      name,
      user_id,
      total_area,
      cultivated_area,
      city,
      state,
    });

    await this.ormRepository.save(property);

    return property;
  }

  public async save(property: Property): Promise<Property> {
    await this.ormRepository.save(property);

    return property;
  }

  public async remove(property: Property): Promise<void> {
    await this.ormRepository.remove(property);
  }

  public async update(products: IUpdateProperty[]): Promise<void> {
    await this.ormRepository.save(products);
  }

  public async findByName(name: string): Promise<Property | null> {
    const property = this.ormRepository.findOneBy({
      name,
    });

    return property;
  }

  public async findById(id: string): Promise<Property | null> {
    const property = this.ormRepository.findOneBy({ id });

    return property;
  }
}

export default PropertyRepository;
