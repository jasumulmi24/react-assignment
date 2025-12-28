import { createContext, useContext, useState, type ReactNode } from "react";
import type Expense from "../models/expense.type";

type Filters = {
  category: string;
  date: string;
};

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) throw new Error("useExpenses must be used within ExpenseProvider");
  return context;
};

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filters, setFilters] = useState<Filters>({ category: "", date: "" });

  const addExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, filters, setFilters }}>
      {children}
    </ExpenseContext.Provider>
  );
};
