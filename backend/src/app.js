const express = require("express");
const app = express();
const aiRoutes = require("./routes/aiRoutes");

app.use(express.json());
app.use(aiRoutes);

const port = 3000;
app.listen(port, () => {
  console.log("the server is running using PORT:", port);
});
