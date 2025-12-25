import { type Expense } from "../../types/expense";
import { CATEGORIES } from "../../constants/categories";
import styles from "./Summary.module.css";

interface SummaryProps {
  expenses: Expense[];
}

export const Summary = ({ expenses }: SummaryProps) => {
  const total = expenses.reduce((acc, e) => acc + e.amount, 0);

  const byCategory = CATEGORIES.map((cat) => ({
    name: cat.name,
    amount: expenses
      .filter((e) => e.category === cat.id)
      .reduce((acc, e) => acc + e.amount, 0),
  })).filter((c) => c.amount > 0);

  return (
    <div className={styles.summary}>
      <h3>Всего потрачено: {total.toLocaleString("ru-RU")} ₽</h3>

      {byCategory.length > 0 && (
        <>
          <h4>По категориям:</h4>
          {byCategory.map((c) => (
            <div className={styles.category} key={c.name}>
              <span>{c.name}</span>
              <span>{c.amount.toLocaleString("ru-RU")} ₽</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
