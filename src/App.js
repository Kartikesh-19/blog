import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from './components/UI/Card'
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";


function App() {
  const [filteredYear , setFilteredYear]=useState("2021");
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
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
  const addExpensesHandler= expense=>{
    console.log('cjksk');
    console.log(expense)
  }
  
  const expensesFilterYear=(year)=>{
    console.log(year,"eeeeeeeeee");
    setFilteredYear(year)
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
      <ExpensesFilter selected={filteredYear} onChangeFilter={expensesFilterYear}/>
      {/* <p>This is visible</p> */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />


    </Card>
    </>
  );
}

export default App;
