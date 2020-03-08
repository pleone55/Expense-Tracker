const { Transaction } = require('../models/transaction.models');

module.exports.createTransaction =  async(req, res) => {
    try {
        const { transInput, amount } = req.body;
        const transaction = await Transaction.create(req.body);
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({ error: messages });
        } else {
            return res.status(500).json({ error: 'Server Error'});
        }
    }
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