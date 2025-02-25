const express = require("express");
const { addAgent,updateAgent,getAgent,getAllAgents } = require("../controllers/AgentController.js");

const router = express.Router();

// Register route
router.post("/addagent", addAgent);
router.put("/updateagent/:agentId", updateAgent);
router.get("/getagent/:agentId", getAgent);
router.get("/getallagent", getAllAgents);



module.exports = router;