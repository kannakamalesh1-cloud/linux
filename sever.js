const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.send("🚀 Staging Deployment Successful");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
