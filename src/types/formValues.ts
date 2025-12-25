import { type CategoryId } from "../constants/categories";

export interface FormValues {
  amount: number;
  category: CategoryId;
  description: string;
  date: string;
}