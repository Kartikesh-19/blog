import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  const [data, setData] = useState(props.title);
  function handleInput() {
    setData("Updated");
    console.log(data);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{data}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={handleInput}>Change Title</button>
      
    </Card>
    
  );
}
export default ExpenseItem;
