import type { ExpenseFilterProps } from "../../types/ExpenseFilterProps";

const ExpenseFilter = ({
  selectedCategory,
  selectedDate,
  onFilterChange
}: ExpenseFilterProps) => {


  const handleReset = () => {
    onFilterChange({ category: "", date: "" });
  };

  return (
    <div className="expense-filter">
      <select
        value={selectedCategory}
        onChange={(e) =>
          onFilterChange({ category: e.target.value, date: selectedDate })
        }
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) =>
          onFilterChange({ category: selectedCategory, date: e.target.value })
        }
      />

       <button
        type="button"
        onClick={handleReset}
        disabled={!selectedCategory && !selectedDate}
      >
        Reset
      </button>
    </div>
  );
};

export default ExpenseFilter;
