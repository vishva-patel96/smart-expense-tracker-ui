import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { expenseService } from "../services/api";

// ExpenseList component to display a list of expenses
function ExpenseList()
{    const navigate = useNavigate();

  //usestate
  const[expenses, setExpenses] = useState([]);//empty array intialize
  const[loading, setLoading] =useState(true);
  const[error, setError] =useState(null);

  useEffect(() => {
    fetchExpense();
  },[]);

  const fetchExpense =async ()  =>
  {
    try{
      setLoading(true);
      setError(null);
      //Api call
      const data =await expenseService.getAllExpenses();
      setExpenses(data);// update state with data
      setLoading(false);
    }
    catch(err)
    {
      console.log("failed to load data",err);
      setError("Failed to load data, please try again");
      setLoading(false);
    }
  }


  
  // Handler for navigating to the AddExpense page
  const handleAddExpense =() =>{
  navigate('/add-expense');
    };


    
  // Loading state UI
    if (loading) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Loading expenses...</p>
        </div>
      );
    }

    // Error state UI
    if (error) {
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <p>{error}</p>
          <button onClick={fetchExpense}>Retry</button>
        </div>
      );
    }

  return(
  <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Expense List</h2>
      
      {/* Show message if no expenses */}
      {expenses.length === 0 ? (
        <p>No expenses yet. Add your first expense!</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #333' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Category</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Amount</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td style={{ padding: '12px' }}>{expense.id}</td>
                <td style={{ padding: '12px' }}>{expense.category}</td>
                <td style={{ padding: '12px' }}>${expense.amount.toFixed(2)}</td>
                <td style={{ padding: '12px' }}>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
        <button 
            onClick={handleAddExpense}
            style={{
                marginTop: '20px',
                padding: '12px 24px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
            >
          Add new Expense
        </button>
    </div>

  );


};
export default ExpenseList;