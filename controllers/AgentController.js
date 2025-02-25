const Agent = require("../models/Agent");

// Add Agent
exports.addAgent = async (req, res) => {
    try {
        const newAgent = new Agent(req.body);
        await newAgent.save();
        res.status(201).json({ success: true, message: "Agent added successfully", agent: newAgent });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error adding agent", error: error.message });
    }
};

// Update Agent
exports.updateAgent = async (req, res) => {
    try {
        const { agentId } = req.params;
        const updatedData = req.body;
   console.log(updatedData)
        if (!agentId) {
            return res.status(400).json({ success: false, message: "Agent ID is required" });
        }

        const updatedAgent = await Agent.findByIdAndUpdate(agentId, updatedData, { new: true });
        
        if (!updatedAgent) {
            return res.status(404).json({ success: false, message: "Agent not found" });
        }

        res.status(200).json({ success: true, message: "Agent updated successfully", agent: updatedAgent });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating agent", error: error.message });
    }
};

exports.getAgent = async (req, res) => {
  try {
    const { agentId } = req.params;
    const agent = await Agent.findById(agentId);
    
    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }
    
    res.status(200).json(agent);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all agents
exports.getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


