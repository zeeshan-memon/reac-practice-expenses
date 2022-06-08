import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].expenseDate}
        title={props.items[0].title}
        price={props.items[0].price}
      />
      <ExpenseItem
        date={props.items[1].expenseDate}
        title={props.items[1].title}
        price={props.items[1].price}
      />
      <ExpenseItem
        date={props.items[2].expenseDate}
        title={props.items[2].title}
        price={props.items[2].price}
      />
    </Card>
  );
};
export default Expenses;
