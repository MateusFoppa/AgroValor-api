import { Repository } from 'typeorm';
import { dataSource } from '@shared/infra/typeorm';
import { ICreateBatch } from '@modules/batch/domain/models/ICreateBatch';
import { IBatch } from '@modules/batch/domain/models/IBatch';
import Batch from '../entities/Batch';
import { IListBatch } from '@modules/batch/domain/models/IListBatch';
import { IBatchRepository } from '@modules/batch/domain/repositories/IBatchRepository';
import Expenses from '@modules/expenses/infra/typeorm/entities/Expense';
import Production from '@modules/production/infra/typeorm/entities/Production';

class BatchRepository implements IBatchRepository {
  private ormRepository: Repository<Batch>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Batch);
  }
  public async create({
    name,
    property_id,
    activity,
    geographic_coordinates,
  }: ICreateBatch): Promise<IBatch> {
    const area = this.ormRepository.create({
      name,
      property_id,
      activity,
      geographic_coordinates,
    });

    await this.ormRepository.save(area);

    return area;
  }

  public async save(batch: IBatch): Promise<IBatch> {
    await this.ormRepository.save(batch);

    return batch;
  }

  public async remove(batch: Batch): Promise<void> {
    await this.ormRepository.remove(batch);
  }

  public async findAll(property_Id: string): Promise<IListBatch> {
    const areas = await this.ormRepository
      .createQueryBuilder('batch')
      .where('batch.property_id = :property_Id', { property_Id })
      .getMany();

    const result = {
      data: areas,
    };

    return result;
  }

  public async findByName(
    name: string,
    property_id: string,
  ): Promise<IBatch | null> {
    const batch = await this.ormRepository.findOne({
      where: {
        name,
        property_id,
      },
    });

    return batch;
  }

  public async findByIds(
    property_id: string,
    id: string,
  ): Promise<IBatch | null> {
    const batch = await this.ormRepository.findOne({
      where: {
        property_id,
        id,
      },
    });

    return batch;
  }
  public async findById(property_id: string): Promise<IBatch | null> {
    const batch = await this.ormRepository.findOneBy({
      property_id,
    });

    return batch;
  }

  public async getReportFinanceForBatch(batchId: string) {
    // Consulta para obter despesas
    const expenses = await this.ormRepository
      .createQueryBuilder()
      .select('DISTINCT expenses.id as expense_id')
      .addSelect([
        'batch_id',
        'category',
        'item',
        'unit_of',
        'quantity',
        'value_unit',
        'value_total',
        'data_pgto as date',
      ])
      .from(Expenses, 'expenses')
      .where('expenses.batch_id = :batchId', { batchId })
      .getRawMany();

    // Consulta para obter produções
    const productions = await this.ormRepository
      .createQueryBuilder()
      .select('DISTINCT productions.id as production_id')
      .addSelect([
        'batch_id',
        'category',
        'item',
        'unit_of',
        'quantity',
        'value_unit',
        'value_total',
        'receipt_date as date',
      ])
      .from(Production, 'productions')
      .where('productions.batch_id = :batchId', { batchId })
      .getRawMany();

    // Combine os resultados de despesas e produções em uma única lista
    const combinedData = [...expenses, ...productions];

    // Ordene a lista combinada por data
    combinedData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    // Calcular o balanço financeiro
    const balancoFinanceiro =
      productions.reduce((a, b) => a + b.value_total, 0) -
      expenses.reduce((a, b) => a + b.value_total, 0);

    return { combinedData, balancoFinanceiro, expenses, productions };
  }
}

export default BatchRepository;
