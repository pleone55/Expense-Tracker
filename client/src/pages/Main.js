import React from 'react';
import Header from '../components/Header';
import AddTransaction from '../components/AddTransaction/AddTransaction';
import TransactionList from '../components/TransactionList/TransactionList';
import IncomeExpense from '../components/IncomeExpense/IncomeExpense';
import Balance from '../components/Balance/Balance';


export default () => {
    
    return (
        <div>
            <Header/>
            <Balance />
            <IncomeExpense/>
            <TransactionList/>
            <hr/>
            <AddTransaction/>
        </div>
    )
};