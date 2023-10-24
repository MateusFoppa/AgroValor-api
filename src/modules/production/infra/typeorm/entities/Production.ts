import Batch from '@modules/batch/infra/typeorm/entities/Batch';
import { IProduction } from '@modules/production/domain/models/IProduction';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('production')
class Production implements IProduction {
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

  @Column()
  quantity: number;

  @Column()
  value_unit: number;

  @Column()
  value_total: number;

  @Column()
  receipt_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Batch)
  @JoinColumn({ name: 'batch_id' })
  batch: Batch;
}

export default Production;
