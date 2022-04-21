const Note = require("../models/Note.model");
const Student = require("../models/Student.model");
module.exports.noteController = {
  addNote: async (req, res) => {
    try {
      const { student, text } = req.body;
      await Note.create({ student, text });
      res.json("Заметка добавлена");
    } catch (err) {
      res.json({ err: "Произошла ошибка при добавлении заметки" });
    }
  },
  deleteNote: async (req, res) => {
    try {
      const note = await Note.findByIdAndDelete(req.params.id);

      if (!note) {
        return res.json("Заметка не найдена");
      }
      res.json("Заметка удалена");
    } catch (err) {
      res.json({ err: "Произошла ошибка при удалении заметки" });
    }
  },
  updateNote: async (req, res) => {
    try {
      const { student, text } = req.body;
      const note = await Note.findByIdAndUpdate(req.params.id, {
        student,
        text,
      });

      if (!note) {
        return res.json("Заметка не найдена");
      }
      res.json("Информация заметки обновлена");
    } catch (err) {
      res.json({ err: "Произошла ошибка при обновлении информации о заметке" });
    }
  },
  showNoteById: async (req, res) => {
    try {
      const note = await Note.findById(req.params.id).populate(
        "student",
        "name surname"
      );

      if (!note) {
        return res.json("Заметка не найдена");
      }
      res.json(note);
    } catch (err) {
      res.json({ err: "Произошла ошибка при обновлении информации о заметке" });
    }
  },
  showAllNotes: async (req, res) => {
    try {
      const notes = await Note.find().populate("student", "name surname");

      if (notes.length === 0) {
        return res.json("Заметок пока нет...");
      }
      res.json(notes);
    } catch (err) {
      res.json({ err: "Произошла ошибка при обновлении информации о заметке" });
    }
  },
  showStudentNotes: async (req, res) => {
    try {
      const note = await Student.findById(req.params.id);

      if (!note) {
        return res.json("Студент не найден");
      }
      const notes = await Note.find({ student: req.params.id }).populate(
        "student",
        "name surname"
      );

      if (notes.length === 0) {
        return res.json("Заметок пока нет...");
      }
      res.json(notes);
    } catch (err) {
      res.json({ err: "Произошла ошибка при обновлении информации о заметке" });
    }
  },
};
