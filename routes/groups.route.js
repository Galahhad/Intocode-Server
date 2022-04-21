const { Router } = require("express");
const { groupController } = require("../controllers/groups.controller");

const router = Router();

router.post("/admin/group", groupController.addGroup);
router.delete("/admin/group/:id", groupController.deleteGroup);
router.patch("/admin/group/:id", groupController.updateGroup);
router.get("/group/:id", groupController.showGroupById);
router.get("/groups", groupController.showAllGroups);
router.get("/weeks/:week/groups", groupController.showWeekGroups);
router.get("/groups/finish", groupController.showFinishGroups);
router.get("/admin/group/:id", groupController.showGroupById);
router.get("/admin/groups", groupController.showAllGroups);
router.get("/admin/weeks/:week/groups", groupController.showWeekGroups);
router.get("/admin/groups/finish", groupController.showFinishGroups);

module.exports = router;
