const express = require("express");
const { addAgent,updateAgent,deleteAgent,viewAgent } = require("../controllers/AgentController.js");

const router = express.Router();

// Register route
router.post("/addagent", addAgent);
router.patch("/updateagent", updateAgent);
router.get("/getagent", viewAgent);
router.delete("/deleteagent", deleteAgent);


module.exports = router;