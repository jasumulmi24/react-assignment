import { useState } from "react";
import Input from "../../components/Input";

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
      amount: !form.amount ? "Amount is required" 
            : Number(form.amount) <= 0 ? "Amount must be greater than zero" : "",
      category: form.category ? "" : "Category is required",
      date: form.date ? "" : "Date is required",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(err => err)) return;

    addExpense({ id: crypto.randomUUID(), title: form.title, amount: Number(form.amount), category: form.category, date: form.date });

    setForm({ id: "", title: "", amount: "", category: "", date: "" });
    setErrors({ title: "", amount: "", category: "", date: "" });
  };

 const handleChange = (value: string, name: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <form className="expense-form" onSubmit={handleFormSubmit}>
      <Input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        error={errors.title}
      />

      <Input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        error={errors.amount}
      />

      <Input
        name="category"
        placeholder="Select Category"
        value={form.category}
        onChange={handleChange}
        error={errors.category}
        options={[
          { label: "Food", value: "Food" },
          { label: "Transport", value: "Transport" },
          { label: "Entertainment", value: "Entertainment" },
          { label: "Other", value: "Other" },
        ]}
      />

      <Input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        error={errors.date}
      />

      <div className="form-field">
        <button type="submit">Add Expense</button>
        <span className="expense-error">{"\u00A0"}</span>
      </div>
    </form>
  );
};

export default ExpenseForm;
