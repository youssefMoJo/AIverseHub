const express = require("express");
const router = new express.Router();
const aiController = require("../controllers/aiController");

// Endpoint to retrieve information about an individual AI
router.get("/api/ai/create", aiController.createAI);

module.exports = router;
