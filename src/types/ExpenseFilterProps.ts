export type ExpenseFilterProps = {
  selectedCategory: string;
  selectedDate: string;
  onFilterChange: (filters: {
    category: string;
    date: string;
  }) => void;
  handleReset: void
};
