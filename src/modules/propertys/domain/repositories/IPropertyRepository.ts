/* eslint-disable no-unused-vars */
import { ICreateProperty } from '../models/ICreateProperty';
import { IUpdateProperty } from '../models/IUpdateProperty';
import { IProperty } from '../models/IProperty';

interface IPropertyRepository {
  create(data: ICreateProperty): Promise<IProperty>;
  save(property: IProperty): Promise<IProperty>;
  remove(property: IProperty): Promise<void>;
  update(products: IUpdateProperty[]): Promise<void>;
  findByName(name: string): Promise<IProperty | null>;
  findById(id: string): Promise<IProperty | null>;
}

export default IPropertyRepository;
