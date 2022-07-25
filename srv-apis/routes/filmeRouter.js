const express = require("express");
const router = express.Router();
const filmeController = require("../controllers/filmeController");

router.get("/", filmeController.carregar);
router.put("/:codigo", filmeController.atualizar);

module.exports = router;
