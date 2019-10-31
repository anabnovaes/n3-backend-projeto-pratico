const express = require("express")
const router = express.Router();
const controller = require('../controller/tarefasController');

router.get("/:id", controller.getId);
router.get("/", controller.getTarefas);
router.get("/concluidos/filtrar", controller.getConcluidos);

module.exports = router
