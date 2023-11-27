import { inject, injectable } from 'tsyringe';
import { IBatchRepository } from '../domain/repositories/IBatchRepository';
import { IShowBatch } from '../domain/models/IShowBatch';
import CustomAPIError from '@shared/errors';
import { IExpensesRepository } from '@modules/expenses/domain/repositories/IExpensesRepository';
import { IProductionRepository } from '@modules/production/domain/repositories/IProductionRepository';

@injectable()
class ReportFinanceBatchService {
  constructor(
    @inject('BatchRepository')
    private batchRepository: IBatchRepository,
    @inject('ExpensesRepository')
    private expenseRepository: IExpensesRepository,
    @inject('ProductionRepository')
    private productionRepository: IProductionRepository,
  ) {
    if (!batchRepository || !expenseRepository || !productionRepository) {
      throw new Error('BatchRepository is required.');
    }
  }
  public async execute({ property_id, batch_id }: IShowBatch) {
    const batch = await this.batchRepository.findByIds(property_id, batch_id);
    if (!batch) {
      throw new CustomAPIError.BadRequestError('Property or Batch not exist.');
    }

    const reportFinance = await this.batchRepository.getReportFinanceForBatch(
      batch_id,
    );

    return reportFinance;
  }
}

export default ReportFinanceBatchService;
