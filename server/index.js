const express = require('express');
require('./db/mongoose');

// routes
const userRouter = require('./routes/user');

const app = express();
const port = 8000;


app.use(express.json())
app.use(userRouter);


app.listen(port, () => {
    console.log('server running at 3000')
})

