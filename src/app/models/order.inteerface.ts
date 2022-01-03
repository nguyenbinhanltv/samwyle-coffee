export interface Order {
  id: number;
  tax: number;
  total: number;
  status: OrderStatus;
  table_id: number;
  create_date: string;
  write_date: string;
  order_line: OrderLine[];
}

export interface OrderLine {
  id?: number;
  product_id: number;
  order_id?: number;
  quantity: number;
  price: number;
  amount: number;
  create_date?: string;
  write_date?: string;
  delete_date?: string;
}

export enum OrderStatus {
  DRAFT = 'draft',
  DOING = 'doing',
  PAID = 'paid'
}
