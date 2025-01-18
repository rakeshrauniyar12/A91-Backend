const express = require("express");
const { addFamilyMember,viewAllFamilyMembers,viewFamilyMember,deleteFamilyMember,updateFamilyMember } = require("../controllers/FamilyMemberController.js");

const router = express.Router();

// Register route
router.post("/addfamilymember", addFamilyMember);
router.patch("/updatefamilymember", updateFamilyMember);
router.get("/viewfamilymemberbyid/:id", viewFamilyMember);
router.delete("/viewallfamilymember", viewAllFamilyMembers);
router.delete("/deletefamilymember", deleteFamilyMember);


module.exports = router;