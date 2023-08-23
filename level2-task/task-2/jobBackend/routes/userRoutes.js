// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
  const headers = req.headers;
  try {
    const [_, token] = headers.authorization.split("Bearer ");
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
    next();
    return;
  } catch {
    res.status(500).body({
      message: "Token is not valid",
    });
  }
});

router.get("/check-user-health", (_, res) => res.send("OK"));
router.get("/:id", userController.getUserById);
router.get("/get-profile/self", userController.getSelf);
router.post("/", userController.createUser);
// Add more routes as needed (e.g., updateUser, deleteUser)

module.exports = router;
