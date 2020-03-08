import React, { useContext } from 'react';
import TransactionContext from '../../Context/Transaction/TransactionContext';

import './Balance.scss';

const Balance = () => {
    const transactionBalance = useContext(TransactionContext);
    const { transaction } = transactionBalance;
    
    const amounts = transaction.map(transactions => transactions.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
};

export default Balance;