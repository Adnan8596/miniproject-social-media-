const express = require('express');
const cors = require('cors')
require('./db/mongoose');

// routes
const userRouter = require('./routes/user');
const communityRouter = require('./routes/community')
const postRouter = require('./routes/post');

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())
app.use('/api',userRouter);
app.use('/api', communityRouter);
app.use('/api',postRouter);


app.listen(port, () => {
    console.log('server running at ' + port)
})

