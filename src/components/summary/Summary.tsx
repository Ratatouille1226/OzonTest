import { type Expense } from "../../types/expense";
import { CATEGORIES } from "../../constants/categories";

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
    <div className="summary">
      <h3>Всего потрачено: {total.toLocaleString("ru-RU")} ₽</h3>

      {byCategory.length > 0 && (
        <>
          <h4>По категориям:</h4>
          <ul>
            {byCategory.map((c) => (
              <li key={c.name}>
                • {c.name}: {c.amount.toLocaleString("ru-RU")} ₽
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
