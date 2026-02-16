import React from "react";

interface Expense {
    id : number;
    category: string;
    amount: number;
    date: string;
}

const ExpenseList: React.FC = () => {
  // Static expense data
  const expenses: Expense[] = [
    { id: 1, category: 'Food', amount: 45.50, date: '2026-02-10' },
    { id: 2, category: 'Transportation', amount: 25.00, date: '2026-02-12' },
    { id: 3, category: 'Entertainment', amount: 60.00, date: '2026-02-13' },
    { id: 4, category: 'Utilities', amount: 120.00, date: '2026-02-14' },
    { id: 5, category: 'Shopping', amount: 89.99, date: '2026-02-15' },
  ];

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
    </div>

  );


};
export default ExpenseList;