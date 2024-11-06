require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/facebook",(req,res) => {
    res.send("Amartya Roy Mana")
})

app.get("/game",(req,res) => {
    res.send("darkSoul")
})

app.get("/bio", (req,res) => {
    res.send("<h1>This is Amartya Roy learning Backend</h1>")
})

const Port = process.env.PORT

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})