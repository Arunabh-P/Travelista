const express = require("express");
const {Conversation, getOneUserAllConversation} = require("../controllers/conversation")
const router = express.Router();


router.route("/conversation").post(Conversation)
router.route("/conversation/:userId").get(getOneUserAllConversation)


module.exports = router;
