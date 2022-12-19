const express = require("express")
const app = express()

const port = 3001;
const msg = 'Servidor funcionando en el puerto ${port}'

app.listen(port, msg)

app.length("/", (res, req) => {
  try {
    res.send("Hello word")
  } catch (error) {
    console.log(error)
  }
})