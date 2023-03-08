import express from 'express'
import Quote from 'inspirational-quotes'

const app = express()

app.get('/', (req, res) => {
  res.send(Quote.getQuote())
})

app.listen(9200, () => {
  console.log('Server started successfully! 🥳')
})
