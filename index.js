const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes.js");
const otpRoutes = require("./routes/OtpRoutes.js");
const agentRoutes = require("./routes/AgentRoutes.js");
const familyMemberRoutes = require("./routes/FamilyMemberRoutes.js");
const propertyRoutes = require("./routes/PropertyRoutes.js");
const connectDB = require("./config/db");
const app = express();
const PORT = 3001;
connectDB();
// Middleware
app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:3000","http://localhost:3001","https://a9ine.vercel.app"],
  method: "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cors(corsOptions));
app.use("/api/auth", userRoutes);
app.use("/api/auth", otpRoutes);
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
