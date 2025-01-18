const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes.js");
const agentRoutes = require("./routes/AgentRoutes.js");
const familyMemberRoutes = require("./routes/FamilyMemberRoutes.js");
const propertyRoutes = require("./routes/PropertyRoutes.js");
const connectDB = require("./config/db");
const app = express();
const PORT = 3000;
// connectDB();
// Middleware
app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:3000"],
  method: "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use("/api/auth", userRoutes);
app.use("/api/agent", agentRoutes);
app.use("/api/familymember", familyMemberRoutes);
app.use("/api/property", propertyRoutes);
app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
