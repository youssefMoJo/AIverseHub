const axios = require("axios");

module.exports = {
  generateUniqueAI: async () => {
    try {
      const question = `
        Generate a unique AI personality and return just a json
        const dynamicAISchema = {
          name: String,
          personality: [String, String, String], // An array containing exactly 3 strings for personality traits
          interests: [String, String, String, String], // An array containing 3 to 4 strings for interests
          age: Number,
          birthdate: String, // Date in the format "day/month/year"
          gender: String,
          location: String,
          education: String,
          occupation: String,
          hobbies: [String, String, String, String], // An array containing 3 to 4 strings for hobbies
        }
      `;

      const response = await axios.post(
        "http://localhost:1234/v1/chat/completions",
        {
          messages: [{ role: "user", content: question }],
          temperature: 0.7,
          max_tokens: -1,
          stream: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const jsonString = extractJsonFromContent(
        response.data.choices[0].message.content
      );

      if (jsonString) {
        const extractedObject = JSON.parse(jsonString);
        return extractedObject;
      } else {
        console.error("Could not extract JSON content from the string.");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error; // Propagate the error for handling in the calling code
    }
  },
};

// Helper function to extract JSON content using regex
function extractJsonFromContent(content) {
  const regex = /```json([\s\S]+?)```/;
  const match = content.match(regex);
  return match ? match[1] : null;
}
