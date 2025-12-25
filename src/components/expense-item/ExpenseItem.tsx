import { CATEGORIES } from "../../constants/categories";
import { type Expense } from "../../types/expense";

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: string) => void;
}

export const ExpenseItem = ({ expense, onDelete }: ExpenseItemProps) => {
  const categoryName = CATEGORIES.find((c) => c.id === expense.category)?.name;

  const formattedDate = new Date(expense.date).toLocaleDateString("ru-RU");

  const formattedAmount = expense.amount.toLocaleString("ru-RU") + " ₽";

  return (
    <li>
      <div>
        <strong>{formattedAmount}</strong>
        <span>{categoryName}</span>
        <span>{expense.description}</span>
        <span>{formattedDate}</span>
      </div>

      <button onClick={() => onDelete(expense.id)}>×</button>
    </li>
  );
};
