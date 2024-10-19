const express = require("express");
const respuesta = require("../../red/respuestas");

const router = express.Router();

router.get("/", (req, res) => {
  respuesta.success(req, res, "Todo OK", 200);
});

router.get("/", (req, res) => {
  respuesta.error(req, res, "Todo MAL", 500);
});

module.exports = router;
