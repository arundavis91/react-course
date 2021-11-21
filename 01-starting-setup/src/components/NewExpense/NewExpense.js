import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
    const newExpenseHandler = (userInput) => {
        props.onNewExpense(userInput);
    }

    return (<div className='new-expense'>

        <ExpenseForm onNewExpense={newExpenseHandler} />

    </div>);
}

export default NewExpense;