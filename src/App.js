import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyExpenses = [
  {
    title: "Car Inssurance",
    price: 200,
    expenseDate: new Date("2022-05-28"),
  },
  {
    title: "Rent",
    price: 300,
    expenseDate: new Date("2022-04-21"),
  },
  {
    title: "Internet Bill",
    price: 200,
    expenseDate: new Date("2022-06-01"),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseData = (expense) => {
    const updatedExpense = [expense, ...dummyExpenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
