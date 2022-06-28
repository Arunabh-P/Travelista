const express = require("express");
const { register, login, logout, getUsers, blockUser, unblockUser } = require("../controllers/admin");
const {protectAdmin} = require("../middlewares/auth")
const router = express.Router();

router.route("/admin/register").post(register)
router.route("/admin/login").post(login)
router.route("/admin/logout").post(logout)
router.route("/admin/users").get(protectAdmin,getUsers)

router.route("/admin/blockUser/:id").put(blockUser);

router.route("/admin/unblockUser/:id").put(unblockUser);

module.exports = router;