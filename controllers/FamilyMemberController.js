const FamilyMember = require("../models/FamilyMember.js");

const addFamilyMember = async (req, res) => {
    try {
        const familyMember = new FamilyMember(req.body);
        const savedFamilyMember = await familyMember.save();
        res.status(201).json({ success: true, data: savedFamilyMember });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const updateFamilyMember = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFamilyMember = await FamilyMember.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedFamilyMember) {
            return res.status(404).json({ success: false, error: "Family Member not found" });
        }
        res.status(200).json({ success: true, data: updatedFamilyMember });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const deleteFamilyMember = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFamilyMember = await FamilyMember.findByIdAndDelete(id);
        if (!deletedFamilyMember) {
            return res.status(404).json({ success: false, error: "Family Member not found" });
        }
        res.status(200).json({ success: true, data: deletedFamilyMember });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const viewFamilyMember = async (req, res) => {
    try {
        const { id } = req.params;
        const familyMember = await FamilyMember.findById(id).populate("user");
        if (!familyMember) {
            return res.status(404).json({ success: false, error: "Family Member not found" });
        }
        res.status(200).json({ success: true, data: familyMember });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const viewAllFamilyMembers = async (req, res) => {
    try {
        const familyMembers = await FamilyMember.find().populate("user");
        res.status(200).json({ success: true, data: familyMembers });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    addFamilyMember,
    updateFamilyMember,
    viewAllFamilyMembers,
    viewFamilyMember,
    deleteFamilyMember
  };