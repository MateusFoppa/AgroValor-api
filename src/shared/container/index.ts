import IPropertyRepository from '@modules/propertys/domain/repositories/IPropertyRepository';
import PropertyRepository from '@modules/propertys/typeorm/repositories/PropertyRepository';
import { container } from 'tsyringe';

container.registerSingleton<IPropertyRepository>(
  'PropertyRepository',
  PropertyRepository,
);
