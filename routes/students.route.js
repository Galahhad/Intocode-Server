const { Router } = require("express");
const { studentController } = require("../controllers/students.controller");

const router = Router();

router.post("/student", studentController.addStudent);
router.delete("/student/:id", studentController.deleteStudent);
router.patch("/student/:id", studentController.patchStudent);
router.patch("/admin/group/:group/student/:student",studentController.patchStudentGroup);
router.get("/student/:id", studentController.showStudentById);
router.get("/students", studentController.showAllStudents);
router.get("/group/:id/students", studentController.showGroupStudents);
router.get("/pay/:num/students", studentController.showPayStudents);
router.get("/status/students", studentController.showStatusStudents);
router.get("/group/:group/students/percent",studentController.showStudentPercent);
router.get("/admin/student/:id", studentController.showStudentById);
router.get("/admin/students", studentController.showAllStudents);
router.get("/admin/group/:id/students", studentController.showGroupStudents);
router.get("/admin/pay/:id/students", studentController.showPayStudents);
router.get("/admin/status/students", studentController.showStatusStudents);
router.get("/admin/group/:group/students/percent",studentController.showStudentPercent);

module.exports = router;
