const { Transaction } = require('../models/transaction.models');

module.exports.createTransaction =  async(req, res) => {
    const { transInput, amount } = req.body;
    Transaction.create({
        transInput,
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