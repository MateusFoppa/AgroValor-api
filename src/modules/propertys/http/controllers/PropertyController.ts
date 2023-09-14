import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { StatusCodes } from 'http-status-codes';
import CreatePropertyService from '@modules/propertys/services/CreatePropertyService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, total_area, cultivated_area, city, state } = request.body;

    const createProperty = container.resolve(CreatePropertyService);
    const property = await createProperty.execute({
      name,
      total_area,
      cultivated_area,
      city,
      state,
    });

    return response.status(StatusCodes.CREATED).json(property);
  }
}
