const { Transaction } = require('../models/transaction.models');

module.exports.createTransaction = (req, res) => {
    const { transaction, amount } = req.body;
    Transaction.create({
        transaction,
        amount
    })
        .then(trans => res.json(trans))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllTransactions = (req, res) => {
    Transaction.find({})
        .then(trans => res.json(trans))
        .catch(err => res.json(err));
}

module.exports.deleteTransaction = ((req, res) => {
    Transaction.deleteOne({ _id: req.params.id })
        .then(trans => res.json(trans))
        .catch(err => res.json(err));
})