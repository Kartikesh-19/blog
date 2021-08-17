import React from 'react'
import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'

function NewExpense(props) {
  const saveExpenseDataHandler=(data)=>{
    const expenseData ={
      ...data
    }
    props.onAddExpense(expenseData)

  }
  return (
    <div className="new-expense">

      <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
