import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const items = [
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
  return (
    <div>
      <NewExpense/>
      <Expenses items={items} />
    </div>
  );
};

export default App;
