import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
 
// AddExpense component to provide a blank page for adding new expenses
function AddExpense() {
    const navigate = useNavigate(); 
    const[amount, setAmount]= useState("");
    const[date, setDate] =useState("");
    const [category, setCategory] = useState("");


    // Static category list
    const categories = [
        "Food & Dining",
        "Transportation",
        "Shopping",
        "Entertainment",
        "Bills & Utilities",
        "Healthcare",
        "Education",
        "Travel",
        "Groceries",
        "Other"
    ];
    function handleSubmit (){
        //validation check
        if(!amount || !date || !category)
        {
            alert("Please fill all details!!")
        }
        //create expense obj
         const newExpense ={
            amount:parseFloat(amount),
            date,
            category
         };
         console.log("New Expense:", newExpense);
        // TODO: Send to API
        
        // Reset form
        setAmount("");
        setDate("");
        setCategory("");
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h2>Add New Expense</h2>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                
                {/* Amount Field */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="amount" style={{ marginBottom: "5px", fontWeight: "bold" }}>
                        Amount:
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        step="0.01"
                        min="0"
                        style={{ padding: "8px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                
                {/* Date Field */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="date" style={{ marginBottom: "5px", fontWeight: "bold" }}>
                        Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{ padding: "8px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                
                {/* Category Dropdown */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="category" style={{ marginBottom: "5px", fontWeight: "bold" }}>
                        Category:
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ padding: "8px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }}
                    >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        marginTop: "10px"
                    }}
                >
                    Add Expense
                </button>
            </form>
        </div>
    );
}


export default AddExpense;