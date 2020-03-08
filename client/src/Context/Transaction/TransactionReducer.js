import {
    GET_TRANSACTION,
    DELETE_TRANSACTION,
    ADD_TRANSACTION,
    ERROR
} from '../types';

export default(state, action) => {
    switch(action.type) {
        case GET_TRANSACTION:
            return {
                ...state,
                transaction: action.payload,
                loading: false,
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                transaction: state.transaction.filter(transaction => transaction._id !== action.payload)
            }
        case ADD_TRANSACTION:
            return {
                ...state,
                transaction: [...state.transaction, action.payload]
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}