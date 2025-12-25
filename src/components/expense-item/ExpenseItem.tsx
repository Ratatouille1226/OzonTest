import { CATEGORIES } from "../../constants/categories";
import { type Expense } from "../../types/expense";
import styles from "./ExpenseItem.module.css";

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: string) => void;
}

export const ExpenseItem = ({ expense, onDelete }: ExpenseItemProps) => {
  const categoryName = CATEGORIES.find((c) => c.id === expense.category)?.name;
  const formattedDate = new Date(expense.date).toLocaleDateString("ru-RU");
  const formattedAmount = expense.amount.toLocaleString("ru-RU") + " ₽";

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.amount}>{formattedAmount}</span>
        <span className={styles.category}>{categoryName}</span>
        <span className={styles.description}>{expense.description}</span>
        <span className={styles.date}>{formattedDate}</span>
      </div>

      <button className={styles.deleteBtn} onClick={() => onDelete(expense.id)}>
        ×
      </button>
    </li>
  );
};
