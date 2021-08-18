import React,{useState} from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
    const [expense, setExpense]=useState({
     title:'',
     amount:'',
     date:''
    })
  
    const [data, setData]=useState([])
    const handleInput=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            console.log(typeof value)
            setExpense({...expense ,[name]:value})
            
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const exp ={
          title:expense.title,
          amount:expense.amount,
          date:expense.date 
        };
        props.onSaveExpenseData(exp)
        const newdata={...expense, id:new Date().getTime().toString()}
        setData([...data,newdata])
        console.log(data);
        setExpense({title:"",amount:"",date:""})
        
      
    }
 
  return (
    <>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name='title' value={expense.title} onChange={handleInput}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"  name='amount' value={expense.amount}  onChange={handleInput}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" name='date' value={expense.date}  onChange={handleInput}/>
          </div>
          <div className="new-expense__actions">
            <button type="submit" onClick={handleSubmit}>Add Expense</button>
          </div>
        </div>
      </form>
     
    </>
  );
};
