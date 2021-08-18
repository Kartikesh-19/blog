import React from "react";
import './ExpenseData.css'

const ExpenseDate = (props) => {
  console.log(typeof props.date)
  const year=new Date(props.date)
  // const date = (typeof (props.date) === 'string') ? Date.parse(props.date) : props.date
  const month = year.toLocaleString("en-US", { month: "long" });
  console.log(month,'dsada');
  const day = year.toLocaleString("en-US", { day: "2-digit" });
  const y=year.getFullYear()
  
  console.log(year,'sasa');
 

  return (
    <>
      <div className='expense-date'>
        <div className='expene-date__month'>{month}</div>
        <div className='expense-date__year' >{y}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
      
    </>
  );
};

export default ExpenseDate;
