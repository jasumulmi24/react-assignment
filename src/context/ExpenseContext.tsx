import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
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
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [filters, setFilters] = useState<Filters>({ category: "", date: "" });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, filters, setFilters }}>
      {children}
    </ExpenseContext.Provider>
  );
};
