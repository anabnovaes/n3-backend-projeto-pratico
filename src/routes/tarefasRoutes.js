const express = require("express")
const router = express.Router();
const controller = require('../controller/tarefasController');

router.get("/:id", controller.getId);
router.get("/", controller.getTarefas);
router.get("/concluidos/filtrar", controller.getConcluidos);
router.get("/:nome/buscar", controller.getNomes);
router.get("/dataInclusao/filtrar", controller.getOrdenadoPorData)
router.get("/concluidos/duracaoTarefa", controller.getTempoConclusao)

module.exports = router
