const express = require('express');
require('./db/mongoose');

// routes
const userRouter = require('./routes/user');

const app = express();
const port = 8000;


app.use(express.json())
app.use('/api',userRouter);


app.listen(port, () => {
    console.log('server running at ' + port)
})

