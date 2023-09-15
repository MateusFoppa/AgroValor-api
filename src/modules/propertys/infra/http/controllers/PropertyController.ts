import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { StatusCodes } from 'http-status-codes';
import CreatePropertyService from '@modules/propertys/services/CreatePropertyService';
import ListPropertyService from '@modules/propertys/services/ListPropertyService';

export default class ProductsController {
  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;

    const listPropertys = container.resolve(ListPropertyService);
    const propertys = await listPropertys.execute(user_id);

    return response.status(StatusCodes.OK).json(propertys);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, total_area, cultivated_area, city, state } = request.body;
    const user_id = request.user.id;

    const createProperty = container.resolve(CreatePropertyService);
    const property = await createProperty.execute({
      name,
      user_id,
      total_area,
      cultivated_area,
      city,
      state,
    });

    return response.status(StatusCodes.CREATED).json(property);
  }
}
