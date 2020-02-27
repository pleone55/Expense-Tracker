import React from 'react';
import axios from 'axios';

import './TransactionList.scss';

const TransactionList = ({ trans, removeFromDom }) => {
    
    const handleDelete = transId => {
        axios.delete('http://localhost:7000/api/transaction/' + transId)
            .then(response => {
                removeFromDom(transId)
            })
    }
    
    // const sign = trans.amount < 0 ? '-' : '+';

    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {trans.map((trans, index) => (
                    <li key={index} className={trans.amount < 0 ? 'minus' : 'plus'}>
                        {trans.transaction} <span>{trans.amount < 0 ? '-' : '+'}${Math.abs(trans.amount)}</span>
                        <button onClick={() => {handleDelete(trans._id)}} className='delete-btn'>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default TransactionList