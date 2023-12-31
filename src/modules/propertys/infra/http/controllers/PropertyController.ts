import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { StatusCodes } from 'http-status-codes';
import CreatePropertyService from '@modules/propertys/services/CreatePropertyService';
import ListPropertyService from '@modules/propertys/services/ListPropertyService';
import showPropertyService from '@modules/propertys/services/ShowPropertyService';
import UpdatePropertyService from '@modules/propertys/services/updatePropertyService';
import DeletePropertyService from '@modules/propertys/services/DeletePropertyService';

interface IRequest extends Request {
  // user: {
  //   id: string;
  // };
}
export default class PropertyController {
  public async listAll(
    request: IRequest,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;

    const listPropertys = container.resolve(ListPropertyService);
    const propertys = await listPropertys.execute(user_id);

    return response.status(StatusCodes.OK).json(propertys);
  }

  public async create(
    request: IRequest,
    response: Response,
  ): Promise<Response> {
    const { name, total_area, cultivated_area, city, state } = request.body;
    const user_id = request.user.id;

    console.log(request);

    const CreateProperty = container.resolve(CreatePropertyService);

    const property = await CreateProperty.execute({
      name,
      user_id,
      total_area,
      cultivated_area,
      city,
      state,
    });

    return response.status(StatusCodes.CREATED).json(property);
  }

  public async show(request: IRequest, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const property_id = request.params.id;

    const showProperty = container.resolve(showPropertyService);

    const property = await showProperty.execute(user_id, property_id);

    return response.status(StatusCodes.OK).json(property);
  }

  public async update(
    request: IRequest,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;
    const property_id = request.params.id;
    const { name, total_area, cultivated_area, city, state } = request.body;

    const updateProperty = container.resolve(UpdatePropertyService);

    const property = await updateProperty.execute({
      name,
      user_id,
      total_area,
      cultivated_area,
      city,
      state,
      property_id,
    });

    return response.json(property);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProperty = container.resolve(DeletePropertyService);

    await deleteProperty.execute({ id });

    return response.sendStatus(StatusCodes.NO_CONTENT);
  }
}
