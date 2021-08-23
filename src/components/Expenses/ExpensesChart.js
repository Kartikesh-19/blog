import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    const chartDataPoints=[
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'June', value:0},  
        {label:'July', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}

    ];
    for (const items of props.data){
        console.log(items);
        const expenseMonth =items.date.getMonth();// starting at 0 =>january =>0
        console.log(expenseMonth);
        chartDataPoints[expenseMonth].value += items.amount

    }
    return (
        <div className="">
            <Chart dataPoints={chartDataPoints}/>
        </div>
    )
}

export default ExpensesChart
