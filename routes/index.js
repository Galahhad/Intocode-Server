const { Router } = require("express");

const router = Router();

router.use(require("./students.route"));
router.use(require("./notes.route"));
router.use(require("./groups.route"));

module.exports = router;
