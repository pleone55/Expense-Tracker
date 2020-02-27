import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

import './Add.scss';

const AddTransaction = () => {
    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState(0);
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = event => {
        event.preventDefault();

        axios.post('http://localhost:7000/api/new/transaction', {
            transaction,
            amount
        })
            .then(response => console.log(response))
            .then(() => navigate('/'))
            .catch(err => {
                const errResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errResponse)){
                    errorArr.push(errResponse[key].message)
                }

                setErrors(errorArr);
            });
    }

    return (
        <h3>
            <form onSubmit={onSubmitHandler}>
                <div className='errors'>{errors.map((err, i) => <p key={i}>{err}</p>)}</div>
                <div className='form-control'>
                    <label htmlFor='transaction'>Transaction Type</label>
                    <input 
                        type='text' 
                        value={transaction} 
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
                <button onClick={() => navigate('/')} className='btn'>Add Transaction</button>
            </form>
        </h3>
    )
};
export default AddTransaction;