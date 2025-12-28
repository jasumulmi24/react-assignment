import type { ExpenseListProps } from "../../types/ExpenseListProps";
import { memo } from "react";

const ExpenseList = memo(({ expenses }: ExpenseListProps) => {
  if (!expenses.length) return <p>No expenses yet.</p>;

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(x => (
          <tr key={x.id}>
            <td>{x.title}</td>
            <td>Rs. {x.amount}</td>
            <td>{x.category}</td>
            <td>{x.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default ExpenseList;
