import React, {useState, useEffect } from 'react';
import Header from '../components/Header';
import AddTransaction from '../components/AddTransaction/AddTransaction';
import TransactionList from '../components/TransactionList/TransactionList';
import IncomeExpense from '../components/IncomeExpense/IncomeExpense';
import Balance from '../components/Balance/Balance';

import axios from 'axios';

export default () => {
    const [trans, setTrans] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:7000/api/transactions')
            .then(response => {
                setTrans(response.data);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = transId => {
        setTrans(trans.filter(trans => trans._id !== transId));
    }

    return (
        <div>
            <Header/>
            <Balance trans={trans}/>
            <IncomeExpense trans={trans}/>
            {loaded && <TransactionList trans={trans} removeFromDom={removeFromDom}/>}
            <hr/>
            <AddTransaction />
        </div>
    )
};