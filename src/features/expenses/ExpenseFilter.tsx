import Input from "../../components/Input";
import { useExpenses } from "../../context/ExpenseContext";
import type { ExpenseFilterProps } from "../../types/ExpenseFilterProps";

const ExpenseFilter = ({
  selectedCategory,
  selectedDate,
  onFilterChange
}: ExpenseFilterProps) => {
  const { deleteAllExpenses, expenses } = useExpenses();

  const handleReset = () => {
    onFilterChange({ category: "", date: "" });
  };

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all expenses?")) {
      deleteAllExpenses();
      handleReset();
    }
  };

  const handleChange = (value: string, name: string) => {
    onFilterChange({
      category: name === "category" ? value : selectedCategory,
      date: name === "date" ? value : selectedDate,
    });
  };

  const categoryOptions = [
    { label: "Food", value: "Food" },
    { label: "Transport", value: "Transport" },
    { label: "Entertainment", value: "Entertainment" },
    { label: "Other", value: "Other" },
  ];

  return (
    <div className="expense-filter">
      <Input
        name="category"
        value={selectedCategory}
        onChange={handleChange}
        options={categoryOptions}
        placeholder="All Categories"
      />

      <Input
        name="date"
        type="date"
        value={selectedDate}
        onChange={handleChange}
      />

    <div className="expense-filter-buttons" style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
      <button
        type="button"
        onClick={handleReset}
        disabled={!selectedCategory && !selectedDate}
      >
        Reset
      </button>

      <button
        type="button"
        onClick={handleDeleteAll}
        disabled={expenses?.length === 0}
        style={{
          backgroundColor: expenses?.length > 0 ? "#ef4444" : "#e5e7eb",
          color: expenses?.length > 0 ? "white" : "#9ca3af",
        }}
      >
        Delete All
      </button>
    </div>

    </div>
  );
};

export default ExpenseFilter;
