const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await loadData();
  res.send(data);
});

async function loadData() {
  console.log("Doing a long task");

  return await new Promise((r) => setTimeout(r({ someData: "Some Data from Express" }), 1000));
}

// export default router;
module.exports = router;
