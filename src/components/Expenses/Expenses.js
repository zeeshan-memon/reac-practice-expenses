import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React from "react";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          date={expense.expenseDate}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>
  );
};
export default Expenses;
