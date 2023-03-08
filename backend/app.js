import express from 'express'
import Quote from 'inspirational-quotes'

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', (req, res) => {
  res.send(Quote.getQuote())
})

app.listen(9200, () => {
  console.log('Server started successfully! 🥳')
})
