// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

router.get("/", (req, res) => {
  console.log("ACCESSED");
  res.send("Health ok!");
});
router.get("/all-jobs", jobController.getAllJobs);
router.get("/:id", jobController.getJobById);
router.post("/create-new-job", jobController.postJob);
// Add more routes as needed (e.g., updateJob, deleteJob)

module.exports = router;
