const { Router } = require("express");
const { noteController } = require("../controllers/notes.controller");

const router = Router();

router.post("/admin/note", noteController.addNote);
router.delete("/admin/note/:id", noteController.deleteNote);
router.patch("/admin/note/:id", noteController.updateNote);
router.get("/note/:id", noteController.showNoteById);
router.get("/notes", noteController.showAllNotes);
router.get("/student/:id/notes", noteController.showStudentNotes);
router.get("/admin/note/:id", noteController.showNoteById);
router.get("/admin/notes", noteController.showAllNotes);
router.get("/admin/student/:id/notes", noteController.showStudentNotes);

module.exports = router;
