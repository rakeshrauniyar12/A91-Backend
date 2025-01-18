const Agent = require("../models/Agent.js");

const addAgent = async (req, res) => {
  try {
    const agent = new Agent(req.body);
    const savedAgent = await agent.save();
    res.status(201).json({ success: true, data: savedAgent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateAgent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAgent = await Agent.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedAgent) {
      return res.status(404).json({ success: false, error: "Agent not found" });
    }
    res.status(200).json({ success: true, data: updatedAgent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteAgent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAgent = await Agent.findByIdAndDelete(id);
    if (!deletedAgent) {
      return res.status(404).json({ success: false, error: "Agent not found" });
    }
    res.status(200).json({ success: true, data: deletedAgent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const viewAgent = async (req, res) => {
  try {
    const { id } = req.params;
    const agent = await Agent.findById(id);
    if (!agent) {
      return res.status(404).json({ success: false, error: "Agent not found" });
    }
    res.status(200).json({ success: true, data: agent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  addAgent,
  viewAgent,
  updateAgent,
  deleteAgent,
};
