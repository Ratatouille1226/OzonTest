import { ExpenseForm, ExpenseList, Summary } from "./components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Expense } from "./types/expense";

function App() {
  const [expenses, setExpenses] = useLocalStorage<Expense[]>("expenses", []);

  const handleAddExpense = (payload: Omit<Expense, "id" | "createdAt">) => {
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...payload,
    };

    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="app">
      <ExpenseForm onAdd={handleAddExpense} />

      <Summary expenses={expenses} />

      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;
