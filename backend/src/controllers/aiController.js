const axios = require("axios");
const aiService = require("../services/aiService");

module.exports = {
  createAI: async (req, res) => {
    try {
      const newAI = await aiService.generateUniqueAI();
      res.send(newAI);
      //   res.status(201).json(newAI);
    } catch (error) {
      console.error("Error creating AI:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
