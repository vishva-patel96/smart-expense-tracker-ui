import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
 
// AddExpense component to provide a blank page for adding new expenses
function AddExpense() {
    const navigate = useNavigate(); 
    const[amount, setAmount]= useState("");
    const[date, setDate] =useState("");
    // State for category management
    const [category, setCategory] = useState("");
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    // Static list of categories (can be fetched from API in real implementation)
    const [categories, setCategories] = useState([
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
    ]);
    const handleAddCategory =() =>{
        if (!newCategoryName.trim()) {
            alert("Please enter a category name");
            return;
        }

        if (categories.includes(newCategoryName)) {
            alert("Category already exists!");
            return;
        }
        //spread operator to create new array with added category
        setCategories([...categories, newCategoryName]);
        setCategory(newCategoryName); 
        setNewCategoryName("");
        setShowAddCategory(false);
    }

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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                        <label htmlFor="category" style={{ fontWeight: "bold" }}>
                            Category:
                        </label>
                        <button
                            type="button"
                            onClick={() => setShowAddCategory(!showAddCategory)}
                            style={{
                                padding: "5px 10px",
                                fontSize: "12px",
                                backgroundColor: "#2196F3",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            {showAddCategory ? "Cancel" : "+ Add New"}
                        </button>
                    </div>
                    /* Show add category form when button is clicked */
                    {showAddCategory && (
                        <div style={{
                            display: "flex",
                            gap: "8px",
                            marginBottom: "10px",
                            padding: "10px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "4px"
                        }}>
                            <input
                                type="text"
                                value={newCategoryName}
                                /* onChange handler for new category input */
                                onChange={(e) => setNewCategoryName(e.target.value)}
                                placeholder="Enter new category"
                                style={{
                                    flex: 1,
                                    padding: "8px",
                                    fontSize: "14px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc"
                                }}
                            />
                            <button
                                type="button"
                                onClick={handleAddCategory}
                                style={{
                                    padding: "8px 12px",
                                    fontSize: "14px",
                                    backgroundColor: "#4CAF50",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }}
                            >
                                Add
                            </button>
                        </div>
                    )}

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