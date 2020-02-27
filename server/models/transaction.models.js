const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    transaction: { type: String,
        required: [true, "**Please enter the transaction"]
    },
    amount: { type: Number,
        required: [true, "**Please enter a positive or negative amount"]
    }
}, {timestamps: true});

module.exports.Transaction = mongoose.model('Transaction', TransactionSchema);