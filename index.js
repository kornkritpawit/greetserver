const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) =>
  res.send('Greetings from Kritpawit')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
