import React from "react";
import { useNavigate } from "react-router-dom";


interface Expense {
    id : number;
    category: string;
    amount: number;
    date: string;
}
// ExpenseList component to display a list of expenses
function ExpenseList()
{    const navigate = useNavigate();

  // Static expense data
  const expenses: Expense[] = [
    { id: 1, category: 'Food', amount: 45.50, date: '2026-02-10' },
    { id: 2, category: 'Transportation', amount: 25.00, date: '2026-02-12' },
    { id: 3, category: 'Entertainment', amount: 60.00, date: '2026-02-13' },
    { id: 4, category: 'Utilities', amount: 120.00, date: '2026-02-14' },
    { id: 5, category: 'Shopping', amount: 89.99, date: '2026-02-15' },
  ];
// Handler for navigating to the AddExpense page
  const handleAddExpense =() =>{
    navigate('/add-expense');
  };
  return(

    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Expense List</h2>
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
                        <td>{expense.id}</td>
                        <td>{expense.category}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
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