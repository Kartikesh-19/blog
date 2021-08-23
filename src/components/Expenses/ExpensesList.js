import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallBack'>Found no expenses.</h2>
    }

    return (
        <>
            <ul className='expenses-list'>
                {props.items.map(ele => <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />)}

            </ul>
        </>
    )
}

export default ExpensesList
