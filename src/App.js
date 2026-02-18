import './App.css';
import ExpenseList from './components/ExpenseList.jsx';
import AddExpense from './components/AddExpense.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            HEllo World! Welcome to Smart Expense Tracker!
          </p>
        </header>
        <Routes>
          <Route path="/" element={<ExpenseList />} />
          <Route path="/add-expense" element={<AddExpense />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
