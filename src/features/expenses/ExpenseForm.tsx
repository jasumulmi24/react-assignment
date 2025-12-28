import { useState } from "react";

type ExpenseFormProps = {
  addExpense: (expense: { id: string, title: string; amount: number; category: string; date: string }) => void;
};

const ExpenseForm = ({ addExpense }: ExpenseFormProps) => {
  const [form, setForm] = useState({ id: "", title: "", amount: "", category: "", date: "" });
  const [errors, setErrors] = useState({ title: "", amount: "", category: "", date: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      title: form.title ? "" : "Title is required",
      amount: form.amount ? "" : "Amount is required",
      category: form.category ? "" : "Category is required",
      date: form.date ? "" : "Date is required",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(err => err)) return;

    addExpense({ id: crypto.randomUUID(), title: form.title, amount: Number(form.amount), category: form.category, date: form.date });

    setForm({ id: "", title: "", amount: "", category: "", date: "" });
    setErrors({ title: "", amount: "", category: "", date: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: "" }));
  };

  return (
    <form className="expense-form" onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className={errors.title ? "invalid" : ""}
        />
        <span className="expense-error">{errors.title || "\u00A0"}</span>
      </div>

      <div>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className={errors.amount ? "invalid" : ""}
        />
        <span className="expense-error">{errors.amount || "\u00A0"}</span>      
    </div>

      <div>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className={errors.category ? "invalid" : ""}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        <span className="expense-error">{errors.category || "\u00A0"}</span>
      </div>

      <div>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={errors.date ? "invalid" : ""}
        />
        <span className="expense-error">{errors.date || "\u00A0"}</span>
      </div>
      <div>
         <button type="submit">Add Expense</button>
        <span className="expense-error">{"\u00A0"}</span>
      </div>
      
      
    </form>
  );
};

export default ExpenseForm;
