const express = require("express")
const app = express()

//rotas
const index = require("./src/routes/index")
const tarefas = require("./src/routes/tarefasRoutes")

//usando as rotas
app.use("/", index)
app.use("/tarefas", tarefas)




module.exports = app
