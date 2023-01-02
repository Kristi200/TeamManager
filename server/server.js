const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./config/mongoose.config')
require('./routes/player.routes')(app)

app.listen(8000,()=> console.log("Listening to port 8000!"))