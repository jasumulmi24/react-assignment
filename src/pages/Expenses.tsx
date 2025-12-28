import { useState } from "react";
import ExpenseForm from "../features/expenses/ExpenseForm";
import type Expense from "../models/expense.type";
import ExpenseList from "../features/expenses/ExpenseList";
import ExpenseSummary from "../features/expenses/ExpenseSummary";
import ExpenseFilter from "../features/expenses/ExpenseFilter";

const Expenses = () => {

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense]);
  };

return(
  <>
    <h2>Expense Tracker</h2>
    <ExpenseFilter/>
    <ExpenseForm addExpense={handleAddExpense}/>
    <ExpenseList expenses={expenses}/>
    <ExpenseSummary expenses={expenses}/>
  </>
  ) 
}

export default Expenses;