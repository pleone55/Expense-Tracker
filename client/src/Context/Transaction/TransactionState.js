import React, { useReducer } from 'react';
import axios from 'axios';
import TransactionContext from './TransactionContext';
import TransactionReducer from './TransactionReducer';

import {
    GET_TRANSACTION,
    DELETE_TRANSACTION,
    ADD_TRANSACTION,
    ERROR
} from '../types';

const TransactionState = props => {
    const initialState = {
        transaction: [],
        loading: true,
        error: []
    }

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    //Get transactions
    const getTransaction = async() => {

        const res = await axios.get('http://localhost:7000/api/transactions')

        dispatch({
            type: GET_TRANSACTION,
            payload: res.data
        });
    };

    const deleteTransaction = async(id) => {
        await axios.delete(`http://localhost:7000/api/transaction/${id}`);

        dispatch({
            type: DELETE_TRANSACTION,
            payload: id
        });
    };

    const addTransaction = async(transaction, error) => {
        try {
            const res = await axios.post('http://localhost:7000/api/new/transaction', transaction, error);

            dispatch({
                type: ADD_TRANSACTION,
                payload: res.data
            });
        } catch(err) {
            const errResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errResponse)){
                errorArr.push(errResponse[key].message)
            }
            dispatch({
                type: ERROR,
                payload: errorArr
            });
        }
    }

    return (
        <TransactionContext.Provider value={{
            transaction: state.transaction,
            error: state.error,
            loading: state.loading,
            getTransaction,
            deleteTransaction,
            addTransaction
        }}>
            {props.children}
        </TransactionContext.Provider>
    )

};
export default TransactionState;