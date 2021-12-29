import { Category } from "./category.inteface";

export interface Product {
  id: number;
  name: string;
  price: number;
  image_path: string;
  create_date: string;
  write_date: string;
  delete_date: string;
  category_id: Category;
}
