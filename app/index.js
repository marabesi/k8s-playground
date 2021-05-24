const os = require('os')
const ip = require('ip')
const express = require('express')
const app = express()

app.get('/', (_, res) => {
  res.send({
    host: os.hostname(),
    ip: ip.address()
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})