const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api' ,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).catch((err) => {
    console.log(err)
})


// const me = new User({
//     name:'    mikee   ',
//     email:'mike@ds.inUUUUUU',
//     password:'test passwor'
// })

// me.save().then((user) => {
//     console.log(user)
// }).catch((err) => {
//     console.log(err)
// })
// const task = new Task({
//     desc:'   Bring milk  '
// })

// task.save().then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })