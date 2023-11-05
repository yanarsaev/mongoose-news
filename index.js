const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routes/news.route'))
app.use(require('./routes/categories.route'))
app.use(require('./routes/comments.route'))

mongoose.connect('mongodb+srv://yanarsaev:eBaRuSm4gmSKDZ2u@cluster0.2gs1s7k.mongodb.net/')
.then(() => console.log('MongoDB - успешно'))
.catch(() => console.log('MongoDB - Error'))

app.listen(3000, () => console.log('Server has been started'))