const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');
require('./server/routes/transaction.routes')(app);

app.listen(7000, () => {
    console.log("Listening on port 7000")
});