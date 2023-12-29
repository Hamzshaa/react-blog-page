const { Router } = require("express");

const {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
} = require("../controllers/userControllers");

const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.post("/change-avatar", authMiddleware, changeAvatar);
router.patch("/edit-user", authMiddleware, editUser);
router.get("/", getAuthors);

router.get("/", (req, res) => {
  res.json("This is the user route");
});

module.exports = router;
