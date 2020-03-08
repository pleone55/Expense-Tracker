import React, { useContext, useEffect } from 'react';
import TransactionContext from '../../Context/Transaction/TransactionContext';

import './TransactionList.scss';

const TransactionList = () => {
    const transactionContext = useContext(TransactionContext);
    const { transaction, getTransaction, deleteTransaction } = transactionContext;

    useEffect(() => {
        getTransaction();
        // eslint-disable-next-line
    }, [])
    
    
    // const sign = trans.amount < 0 ? '-' : '+';

    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {transaction.map((trans, index) => (
                    <li key={index} className={trans.amount < 0 ? 'minus' : 'plus'}>
                        {trans.transInput} <span>{trans.amount < 0 ? '-' : '+'}${Math.abs(trans.amount)}</span>
                        <button onClick={() => {deleteTransaction(trans._id)}} className='delete-btn'>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default TransactionList