const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api' ,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).catch((err) => {
    console.log(err)
})

