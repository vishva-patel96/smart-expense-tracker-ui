import './App.css';
import ExpenseList from './components/ExpenseList.tsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          HEllo World! Welcome to Smart Expense Tracker!
        </p>
      </header>
      <ExpenseList/>
    </div>
  );
}

export default App;
