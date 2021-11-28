import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import { useState } from "react/cjs/react.development";

function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('2022');
    const filterExpenseHandler = (event) => {
        const selecetdYear = event.target.value;
        setSelectedYear(selecetdYear);
    }

    return (
        <div className='expenses'>
            <ExpensesFilter onFilterExpense={filterExpenseHandler} />
            {
                props.expenses.filter(x => x.date.getFullYear() === parseInt(selectedYear)).
                    map(expense => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)
            }
        </div>);
}

export default Expenses;