import Property from '@modules/propertys/infra/typeorm/entities/Property';
import { IBatch } from '../../../domain/models/IBatch';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Production from '@modules/production/infra/typeorm/entities/Production';
import Expenses from '@modules/expenses/infra/typeorm/entities/Expense';

@Entity('batch')
class Batch implements IBatch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  property_id: string;

  @ManyToOne(() => Property)
  @JoinColumn({ name: 'property_id' })
  property: Property;

  @Column()
  activity: string;

  @Column()
  geographic_coordinates: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Production, production => production.batch)
  productions: Production[];

  @OneToMany(() => Expenses, expenses => expenses.batch)
  expenses: Expenses[];
}

export default Batch;
