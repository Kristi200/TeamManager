const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TeamManager',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Estabilished a connection to the database"))
.catch((err) => console.log("Something went wrong while estabilishing a connection to the database, Error:",err))