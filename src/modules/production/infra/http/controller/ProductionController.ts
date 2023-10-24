import CreateProductionService from '@modules/production/services/CreateProductionService';
import ListProductionService from '@modules/production/services/ListProductionService';
import ShowProductionService from '@modules/production/services/ShowProductionService';
import UpdateProductionService from '@modules/production/services/UpdateProductionService';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';

export default class ProductionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const batch_id = request.params.batch_id;

    const ListProduction = container.resolve(ListProductionService);
    const production = await ListProduction.execute(batch_id);

    return response.status(StatusCodes.OK).json(production);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      receipt_date,
    } = request.body;
    const batch_id = request.params.batch_id;

    const createProduction = container.resolve(CreateProductionService);

    const production = await createProduction.execute({
      batch_id,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      receipt_date,
    });

    return response.status(StatusCodes.CREATED).json(production);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      receipt_date,
    } = request.body;
    const batch_id = request.params.batch_id;
    const production_id = request.params.production_id;

    const updateProduction = container.resolve(UpdateProductionService);

    const production = await updateProduction.execute({
      production_id,
      batch_id,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      receipt_date,
    });

    return response.status(StatusCodes.OK).json(production);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const production_id = request.params.production_id;
    const batch_id = request.params.batch_id;
    const showProduction = container.resolve(ShowProductionService);

    const production = await showProduction.execute({
      production_id,
      batch_id,
    });

    return response.status(StatusCodes.OK).json(production);
  }
}
