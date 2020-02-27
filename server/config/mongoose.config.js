const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expense-transaction', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong trying to connect to the database", err))