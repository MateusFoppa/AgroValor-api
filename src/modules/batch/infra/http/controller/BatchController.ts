import CreateBatchService from '@modules/batch/services/CreateBatchService';
import DeleteBatchService from '@modules/batch/services/DeleteBatchService';
import ListBatchService from '@modules/batch/services/ListBatchService';
import ShowBatchService from '@modules/batch/services/ShowBatchService';
import UpdateBatchService from '@modules/batch/services/UpdateBatchService';
import ReportFinanceBatchService from '@modules/batch/services/ReportFinanceBatchService';

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';

export default class BatchController {
  public async index(request: Request, response: Response): Promise<Response> {
    const property_id = request.params.property_id;

    const listAreas = container.resolve(ListBatchService);
    const batchs = await listAreas.execute(property_id);

    return response.status(StatusCodes.OK).json(batchs);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, activity, geographic_coordinates } = request.body;
    const property_id = request.params.property_id;

    const createBatch = container.resolve(CreateBatchService);

    const area = await createBatch.execute({
      name,
      property_id,
      activity,
      geographic_coordinates,
    });

    return response.status(StatusCodes.CREATED).json(area);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const batch_id = request.params.area_id;
    const property_id = request.params.property_id;
    const { name, activity, geographic_coordinates } = request.body;

    const updateBatch = container.resolve(UpdateBatchService);

    const batch = await updateBatch.execute({
      name,
      batch_id,
      property_id,
      activity,
      geographic_coordinates,
    });

    return response.status(StatusCodes.OK).json(batch);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const property_id = request.params.property_id;
    const batch_id = request.params.batch_id;
    const showBatch = container.resolve(ShowBatchService);

    const batch = await showBatch.execute({ property_id, batch_id });

    return response.status(StatusCodes.OK).json(batch);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const property_id = request.params.property_id;
    const batch_id = request.params.batch_id;

    const deleteBatch = container.resolve(DeleteBatchService);

    await deleteBatch.execute({ property_id, batch_id });

    return response.sendStatus(StatusCodes.NO_CONTENT);
  }

  public async financeReport(request: Request, response: Response): Promise<Response> {
    const property_id = request.params.property_id;
    const batch_id = request.params.batch_id;
    const reportFinanceBatch = container.resolve(ReportFinanceBatchService);

    const reportfinance = await reportFinanceBatch.execute({ property_id, batch_id });

    return response.status(StatusCodes.OK).json(reportfinance);
  }
}
