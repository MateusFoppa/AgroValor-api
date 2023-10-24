export interface IUpdateProduction {
  batch_id: string;
  expenses_id: string;
  category: string;
  item: string;
  unit_of: string;
  quantity: number;
  value_unit: number;
  value_total: number;
  receipt_date: Date;
}
