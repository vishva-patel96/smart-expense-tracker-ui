import React from "react";
import { useNavigate } from "react-router-dom";
// AddExpense component to provide a blank page for adding new expenses
function AddExpense() {
    const navigate = useNavigate(); 
    return (
        <>
            <h2>Add New Expense</h2>
            <p>This is a blank page for adding new expenses.</p>

        </>
    )
};
export default AddExpense;