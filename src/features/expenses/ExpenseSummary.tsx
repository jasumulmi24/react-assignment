import type { ExpenseListProps } from "../../types/ExpenseListProps";

const ExpenseSummary = ({expenses}: ExpenseListProps) => {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    if (total <= 0) return null;

    return (
        <div className="expense-summary">
        <span className="label">Total Expense</span>
        <span className="amount">Rs. {total}</span>
        </div>
    );

}

export default ExpenseSummary;