import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = () => {
  const [filteredYear, setFilteredYear] = useState("");

  const expensesFilterYear = (year) => {
    console.log(year, "eeeeeeeeee");
    setFilteredYear(year);
  };
//   const filteredExpenses=props.items.filter((exp)=>{
//       return exp.date.getFullYear().toString() === filteredYear;
//   })

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={expensesFilterYear}
        />
      </Card>
    </>
  );
};

export default Expenses;
