import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type Expense from "../models/expense.type";

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteAllExpenses: () => void;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenses must be used within ExpenseProvider");
  }
  return context;
};

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  const deleteAllExpenses = () => {
    setExpenses([]);
    localStorage.removeItem("expenses"); // clear local storage
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteAllExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};
