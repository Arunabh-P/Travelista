// const express = require("express");
// const router = express.Router();
// const Conversation = require("../models/Conversation")

// router.post("/conversation", async (req, res) => {
//     const newConversation = new Conversation({
//       members: [req.body.senderId, req.body.receiverId],

//     });
  
//     try {
//       const savedConversation = await newConversation.save();
//       res.status(200).json(savedConversation);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// module.exports = router;

const express = require("express");
const {Conversation} = require("../controllers/conversation")
const router = express.Router();


router.route("/conversation").post(Conversation)

module.exports = router;
