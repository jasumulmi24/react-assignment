import { useState } from "react";
import ExpenseForm from "../features/expenses/ExpenseForm";
import type Expense from "../models/expense.type";
import ExpenseList from "../features/expenses/ExpenseList";
import ExpenseSummary from "../features/expenses/ExpenseSummary";
import ExpenseFilter from "../features/expenses/ExpenseFilter";

const Expenses = () => {

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filters, setFilters] = useState({
    category: "",
    date: "",
  });

  const filteredExpenses = expenses.filter((expense) => {
    const matchCategory =
      !filters.category || expense.category === filters.category;

    const matchDate =
      !filters.date || expense.date === filters.date;

    return matchCategory && matchDate;
  });


  const handleAddExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense]);
  };

return(
  <>
    <h2>Expense Tracker</h2>
     <ExpenseFilter
        selectedCategory={filters.category}
        selectedDate={filters.date}
        onFilterChange={setFilters}
      />
    <ExpenseForm addExpense={handleAddExpense}/>
    <ExpenseList expenses={filteredExpenses}/>
    <ExpenseSummary expenses={filteredExpenses}/>
  </>
  ) 
}

export default Expenses;