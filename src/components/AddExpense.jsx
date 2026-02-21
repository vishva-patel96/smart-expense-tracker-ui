import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { expenseService,categoryService } from "../services/api";

// AddExpense component to provide a blank page for adding new expenses
function AddExpense() {
    const navigate = useNavigate(); 
    const[amount, setAmount]= useState("");
    const[date, setDate] =useState("");
    // State for category management
    const [category, setCategory] = useState("");
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [loading, setLoading] = useState(false);
    const[categoriesLoading, setCategoriesLoading] = useState(true);
    const[error, setError] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try{
            setCategoriesLoading(true);
            const data = await categoryService.getAllCategories();
            console.log("Fetched Categories:", data);
            setCategories(data);
            setCategoriesLoading(false);
        }
        catch(err)        {
            console.log("Failed to load categories", err);
            setError("Failed to load categories, please try again");
            setCategoriesLoading(false);
        }
    };

    const handleAddCategory = async () => {
    if (!newCategoryName.trim()) {
        alert("Please enter a category name");
        return;
    }

    // Check if category already exists
    const categoryExists = categories.some(
        cat => (typeof cat === 'object' ? cat.name : cat) === newCategoryName
    );

    if (categoryExists) {
        alert("Category already exists!");
        return;
    }

    try {
        setLoading(true);
        
        // ✅ Call backend API to save category
        const response = await categoryService.createCategory(newCategoryName);
        
        console.log("Category created:", response);
        
        // Add the new category to local state
        const newCategory = { 
            id: response.id, // Use the ID from backend
            name: newCategoryName 
        };
        
        setCategories([...categories, newCategory]);
        setCategory(newCategoryName);
        setNewCategoryName("");
        setShowAddCategory(false);
        setLoading(false);
        
        alert("Category added successfully!");
    } catch (err) {
        console.error("Failed to add category:", err);
        alert("Failed to add category. Please try again.");
        setLoading(false);
    }
};

    const handleSubmit = async(e) =>
    {
        e.preventDefault();//prevent from refreshing page on submit
        //validation check
        if(!amount || !date || !category)
        {
            alert("Please fill all details!!")
        }
        try{
        //create expense obj
         const newExpense ={
            amount:parseFloat(amount),
            date,
            category
         };

        const createdExpense = await expenseService.createExpense(newExpense);
      
        console.log("Expense created successfully:", createdExpense);
        alert("Expense added successfully!");
        
        
        // Reset form
        setAmount("");
        setDate("");
        setCategory("");
        navigate('/'); // Navigate back to the expense list after adding
        } 
        catch (err) 
        {

        console.error("Failed to create expense:", err);
        setError("Failed to add expense. Please try again.");
        setLoading(false);
        alert("Failed to add expense. Please try again.");
    }
  };

    return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Add New Expense</h2>
      
      {error && (
        <div style={{ color: 'red', marginBottom: '15px' }}>
          {error}
        </div>
      )}
      
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
            required
            disabled={loading}
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
            required
            disabled={loading}
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
              disabled={loading || categoriesLoading}
              style={{
                padding: "5px 10px",
                fontSize: "14px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              {showAddCategory ? "Cancel" : "+ Add Category"}
            </button>
          </div>

          {showAddCategory ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="New category name"
                disabled={loading}
                style={{ flex: 1, padding: "8px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <button
                type="button"
                onClick={handleAddCategory}
                disabled={loading}
                style={{
                  padding: "8px 16px",
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
          ) : (
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              disabled={loading || categoriesLoading}
              style={{ padding: "8px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }}
            >
              <option value="">
                {categoriesLoading ? "Loading categories..." : "Select a category"}
              </option>
                {categories.map((cat) => (
                <option 
                    key={cat.id || cat}  // Use id as key if it's an object
                    value={typeof cat === 'string' ? cat : cat.name}  // Extract name
                >
                    {typeof cat === 'string' ? cat : cat.name}  // Display name
                </option>
                ))}
            </select>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "10px",
            padding: "12px",
            fontSize: "16px",
            backgroundColor: loading ? "#ccc" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold"
          }}
        >
          {loading ? "Adding Expense..." : "Add Expense"}
        </button>

        <button
          type="button"
          onClick={() => navigate('/')}
          disabled={loading}
          style={{
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}


export default AddExpense;