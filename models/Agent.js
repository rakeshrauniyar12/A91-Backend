const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
    agentId: { type: mongoose.Schema.Types.ObjectId },
    agentImage: { type: String, default: "" },
    agentName: { type: String, default: "" },
    agentConsultationRent: { type: String, default: "" },
    agentConsultationSale: { type: String, default: "" },
    agentOperatingSince: { type: String, default: "" },
    agentNumberOfProperties: { type: String, default: "" },
    agentMoreDetails: { type: String, default: "" },
    agentGSTAdditional: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
  });

  
module.exports = mongoose.model("Agent", AgentSchema);