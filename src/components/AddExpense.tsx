import React from "react";
import { useNavigate } from "react-router-dom";
// AddExpense component to provide a blank page for adding new expenses
const AddExpense: React.FC = () => {
    const navigate = useNavigate(); 
    return (
        <>
            <h2>Add New Expense</h2>
            <p>This is a blank page for adding new expenses.</p>
            <button 
                onClick={() => navigate('/')}
                style={{
                marginTop: '20px',
                padding: '12px 24px',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer'
                }}
            >
                Back to Expense List
      </button>
        </>
    )
};
export default AddExpense;