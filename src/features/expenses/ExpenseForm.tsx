import { useState } from "react";

const ExpenseForm = ({addExpense} : any) => {
   const [form, setForm] = useState({title: "",amount: "",category: "", date: ""});
    
   const handleFormSubmit = (e: any) => {
       e.preventDefault();
       if(!form.title) return;
       if(!form.amount) return;
       if(!form.category) return;
       if(!form.date) return;
        
       var model = { title: form.title, amount: Number(form.amount), category: form.category, date: form.date };
       addExpense(model);

       setForm({ title: "", amount: "", category: "", date: ""});
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        })
    )};

    return (
        <form className="expense-form" onSubmit={handleFormSubmit}>
        <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={form.title}
        />

        <input
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
            value={form.amount}
        />

        <select name="category" onChange={handleChange} value={form.category}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
        </select>

        <input type="date" name="date" value={form.date} onChange={handleChange}/>

        <button type="submit">Add Expense</button>
        </form>
    )
};

export default ExpenseForm;