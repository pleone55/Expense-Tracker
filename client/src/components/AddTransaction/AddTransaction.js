import React, { useState, useContext } from 'react';
import TransactionContext from '../../Context/Transaction/TransactionContext';

import './Add.scss';

const AddTransaction = () => {
    const [transInput, setTransaction] = useState('');
    const [amount, setAmount] = useState(0);

    const transactionContext = useContext(TransactionContext);
    const { addTransaction } = transactionContext;

    const onSubmitHandler = event => {
        event.preventDefault();

        const newTransaction = {
            transInput,
            amount,
        }
        
        addTransaction(newTransaction);

        setTransaction('');
        setAmount(0);
    };

    return (
        <h3>
            <form onSubmit={onSubmitHandler}>
                <div className='form-control'>
                    <label htmlFor='transInput'>Transaction Type</label>
                    <input 
                        type='text' 
                        value={transInput} 
                        onChange={event => {setTransaction(event.target.value)}}
                        placeholder="Enter Transaction" 
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Amount(+, -)</label>
                    <input 
                        type='number' 
                        value={amount}
                        onChange={event => {setAmount(event.target.value)}}
                        placeholder="Enter amount"
                    />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </h3>
    )
};
export default AddTransaction;