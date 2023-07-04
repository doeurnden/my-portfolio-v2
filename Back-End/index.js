const express = require('express')
const app = express()



require('./configs/db')();

app.use(require('./routes'))

app.listen(process.env.PORT || 3001, () => console.log('App avaiable on http://localhost:3001'))

