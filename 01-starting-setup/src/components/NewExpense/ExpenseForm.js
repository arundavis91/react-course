import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enteredtitle, setenteredtitle] = useState('');
    const [enteredamount, setenteredamount] = useState('');
    const [entereddate, setentereddate] = useState('');

    const titleEventHandler = event => {
        setenteredtitle(event.target.value)
    }

    const amountEventHandler = event => {
        setenteredamount(event.target.value)
    }

    const dateEventHandler = event => {
        setentereddate(event.target.value)
    }

    const submitEventHandler = event => {
        event.preventDefault();
        const userInput = {
            title: enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate)
        }
        props.onNewExpense(userInput);

        setenteredtitle('');
        setenteredamount('');
        setentereddate('');

    }

    return (<form onSubmit={submitEventHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleEventHandler} value={enteredtitle}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountEventHandler} value={enteredamount}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateEventHandler} value={entereddate}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>);
}

export default ExpenseForm;