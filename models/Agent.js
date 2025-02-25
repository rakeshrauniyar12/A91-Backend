const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
    agentId: { type: mongoose.Schema.Types.ObjectId },
    agentImage: { type: String, default: "" },
    agentFirstName: { type: String, default: "" },
    agentLastName: { type: String, default: "" },
    agentEmail: { type: String, default: "" },
    agentPhoneNumber: { type: String, default: "" },
    agentCityOperation: { type: String, default: "" },
    agentAreaOperation: { type: String, default: "" },
    agentSpecialisation: { type: String, default: "" },
    agentWebsite: { type: String, default: "" },
    agentSocialMediaUrl: { type: String, default: "" },
    agentPanCard: { type: String, default: "" },
    agentGSTCertificate: { type: String, default: "" },
    agentRERACertificate: { type: String, default: "" },
    agentTeamSize: { type: String, default: "" },
    agentCompanyName: { type: String, default: "" },
    agentPinCode: { type: String, default: "" },
    agentLocality: { type: String, default: "" },
    agentCompanyAddress: { type: String, default: "" },
    agentCity: { type: String, default: "" },
    agentPreferredTime: { type: String, default: "" },
    agentConsultationResidentialRentComission: { type: String, default: "" },
    agentConsultationResidentialSaleComission: { type: String, default: "" },
    agentConsultationCommercialRentComission: { type: String, default: "" },
    agentConsultationCommercialSaleComission: { type: String, default: "" },
    agentConsultationPlotRentComission: { type: String, default: "" },
    agentConsultationPlotSaleComission: { type: String, default: "" },
    agentOperatingSince: { type: String, default: "" },
    agentNumberOfProperties: { type: String, default: "" },
    agentGSTAdditional: { type: String, default: "" },
    agentMoreDetails: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
  });

  
module.exports = mongoose.model("Agent", AgentSchema);