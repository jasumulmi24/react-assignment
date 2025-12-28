import { useSearchParams } from "react-router-dom";
import ExpenseForm from "../features/expenses/ExpenseForm";
import ExpenseList from "../features/expenses/ExpenseList";
import ExpenseSummary from "../features/expenses/ExpenseSummary";
import ExpenseFilter from "../features/expenses/ExpenseFilter";
import { useExpenses } from "../context/ExpenseContext";

const Expenses = () => {
  const { expenses, addExpense } = useExpenses();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";
  const date = searchParams.get("date") || "";

  const filteredExpenses = expenses.filter(expense => {
    const matchCategory = !category || expense.category === category;
    const matchDate = !date || expense.date === date;
    return matchCategory && matchDate;
  });

  const handleFilterChange = (filters: { category: string; date: string }) => {
    const params: Record<string, string> = {};

    if (filters.category) params.category = filters.category;
    if (filters.date) params.date = filters.date;

    setSearchParams(params);
  };

  return (
    <>
      <h2>Expense Tracker</h2>

      <ExpenseFilter
        selectedCategory={category}
        selectedDate={date}
        onFilterChange={handleFilterChange}
      />

      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={filteredExpenses} />
      <ExpenseSummary expenses={filteredExpenses} />
    </>
  );
};

export default Expenses;
