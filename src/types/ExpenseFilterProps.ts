import type Expense from "../models/expense.type";

export type ExpenseFilterProps = {
  selectedCategory: string;
  selectedDate: string;
  onFilterChange: (filters: {
    category: string;
    date: string;
  }) => void;
};
