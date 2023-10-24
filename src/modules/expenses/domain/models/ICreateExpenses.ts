export interface ICreateExpenses {
  batch_id: string;
  category: string;
  item: string;
  unit_of: string;
  quantity: number;
  value_unit: number;
  value_total: number;
  data_pgto: Date;
}
