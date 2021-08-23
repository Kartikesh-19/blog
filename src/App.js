import "./App.css";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from './components/UI/Card'
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: (new Date(2020, 7, 14)),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
 const [items, setItems] = useState(expenses)
 console.log(items,"dfsdf");

const addExpensesHandler= expense=>{
  console.log(expense,'sada');
    setItems((prev)=>{
      return (
        [expense,...prev]
      )
    })
}
    
  // return(
  //  React.createElement(
  //   'div',{},React.createElement('h2',{},'Lets get started'),
  //   React.createElement(ExpensesItem, {item:expensesitem}) // that is how jsx works 
  // )
  //  )
  // const para=document.createElement('p');
  // para.textContent ="This is also visible";
  // document.getElementById('root').append(para)
  
  
  return (
    <>
    <Card className="App">
      <NewExpense  onAddExpense={addExpensesHandler}/>
      <Expenses data={items}/>
     
      {/* <p>This is visible</p> */}
    

      {/* {expenses.map(ele=> <ExpenseItem  key={ele.id} title={ele.title} amount={ele.amount} date={ele.date}/>)} */}
        
    </Card>
    </>
  );
}
export default App;

