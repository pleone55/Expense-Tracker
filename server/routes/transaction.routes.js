const TransactionController = require('../contollers/transaction.contollers');

module.exports = function(app) {
    app.get('/api/transactions', TransactionController.getAllTransactions);
    app.post('/api/new/transaction', TransactionController.createTransaction);
    app.delete('/api/transaction/:id', TransactionController.deleteTransaction);
}