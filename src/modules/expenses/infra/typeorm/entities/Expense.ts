import Batch from '@modules/batch/infra/typeorm/entities/Batch';
import { IExpenses } from '@modules/expenses/domain/models/IExpenses';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('expense')
class Expenses implements IExpenses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  batch_id: string;

  @Column()
  category: string;

  @Column()
  item: string;

  @Column()
  unit_of: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value_unit: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value_total: number;

  @Column()
  data_pgto: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Batch)
  @JoinColumn({ name: 'batch_id' })
  batch: Batch;
}

export default Expenses;
