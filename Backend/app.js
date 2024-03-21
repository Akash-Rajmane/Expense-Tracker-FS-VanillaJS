
const express = require('express');
const bodyParser = require('body-parser');
const expenseRoute = require('./routes/expense');
const cors = require('cors');
const app = express();
const sequelize = require("./util/database");

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/expenses', expenseRoute);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

sequelize.sync()
.then((res)=>{
    app.listen(3000);
})
.catch(err=>console.log(err));
