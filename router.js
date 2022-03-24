const express = require("express");
const router = express.Router();

const readfile = require("./middleware/read");
const createfile = require("./middleware/create");
const updatefile = require("./middleware/update");
const deletefile = require("./middleware/delete");

router.get("/read", readfile.readData);
router.post("/create", createfile.createData);
router.put("/update/:name", updatefile.updateData);
router.delete("/delete/:id", deletefile.deleteData);

module.exports = router;