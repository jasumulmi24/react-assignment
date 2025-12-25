import { useState } from "react";
import ExpenseForm from "../features/expenses/ExpenseForm";
import type Expense from "../models/expense.type";
import ExpenseList from "../features/expenses/ExpenseList";

const Expenses = () => {

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense]);
  };

return(
  <>
    <h2>Expense Tracker</h2>
    <ExpenseForm addExpense={handleAddExpense}/>
    <ExpenseList expenses={expenses}/>
  </>
  ) 
}

export default Expenses;