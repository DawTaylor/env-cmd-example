const express = require('express')

const PORT = process.env.PORT || 3000
const DOMAIN = process.env.DOMAIN || 'Domain not provided'

const app = express()

app.get('/', async (req, res) => {
  res.send(`
    <h1>${DOMAIN}</h1>
  `)
})

app.listen(PORT, () => console.log(`Server listening at http://127.0.0.1:${PORT}`))