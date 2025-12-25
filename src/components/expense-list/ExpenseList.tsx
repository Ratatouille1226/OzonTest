import { ExpenseItem } from "../expense-item/ExpenseItem";
import { type Expense } from "../../types/expense";
import styles from "../expense-item/ExpenseItem.module.css";

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length === 0) {
    return <p>Нет расходов</p>;
  }

  const sorted = [...expenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className={styles.expense}>
      {sorted.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  );
};
