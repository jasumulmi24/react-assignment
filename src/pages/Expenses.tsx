import ExpenseForm from "../features/expenses/ExpenseForm";
import ExpenseList from "../features/expenses/ExpenseList";
import ExpenseSummary from "../features/expenses/ExpenseSummary";
import ExpenseFilter from "../features/expenses/ExpenseFilter";
import { useExpenses } from "../context/ExpenseContext";

const Expenses = () => {
  const { expenses, filters, setFilters, addExpense } = useExpenses();

  const filteredExpenses = expenses.filter(expense => {
    const matchCategory = !filters.category || expense.category === filters.category;
    const matchDate = !filters.date || expense.date === filters.date;
    return matchCategory && matchDate;
  });

  return (
    <>
      <h2>Expense Tracker</h2>
      <ExpenseFilter
        selectedCategory={filters.category}
        selectedDate={filters.date}
        onFilterChange={setFilters}
      />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={filteredExpenses} />
      <ExpenseSummary expenses={filteredExpenses} />
    </>
  );
};

export default Expenses;
