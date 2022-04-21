const Student = require("../models/Student.model");
const Group = require("../models/Group.model");
module.exports.studentController = {
  addStudent: async (req, res) => {
    try {
      const { name, surname, group, pay, status } = req.body;
      await Student.create({ name, surname, group, pay, status });
      res.json("Студент добавлен");
    } catch (err) {
      res.json({ err: "Произошла ошибка при добавлении студента" });
    }
  },
  deleteStudent: async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);

      if (!student) {
        return res.json("Студент не найден");
      }
      res.json("Студент удален");
    } catch (err) {
      res.json({ err: "Произошла ошибка при удалении студента" });
    }
  },
  patchStudent: async (req, res) => {
    try {
      const { name, surname, pay, status } = req.body;
      const student = await Student.findByIdAndUpdate(req.params.id, {
        name,
        surname,
        pay,
        status,
      });

      if (!student) {
        return res.json("Студент не найден");
      }
      res.json("Информация о студенте обновлена");
    } catch (err) {
      res.json({
        err: "Произошла ошибка при обновлении информации о студенте",
      });
    }
  },
  patchStudentGroup: async (req, res) => {
    try {
      const student = await Student.findById(req.params.user);
      const group = await Group.findById(req.params.group);

      if (!student || !group) {
        return res.json(
          "Проверьте правильность написания ID студента или группы"
        );
      }
      if (!student && !group) {
        return res.json("ID студента и группы не совпадают с существующими");
      }
      await Student.findByIdAndUpdate(req.params.user, {
        group: req.params.group,
      });
      res.json("Информация о студенте обновлена");
    } catch (err) {
      res.json({
        err: "Произошла ошибка при обновлении информации о студенте",
      });
    }
  },
  showStudentById: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id).populate(
        "group",
        "name"
      );

      if (!student) {
        return res.json("Студент не найден");
      }
      res.json(student);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении информации о студенте" });
    }
  },
  showAllStudents: async (req, res) => {
    try {
      const students = await Student.find().populate("group", "name");

      if (students.length === 0) {
        return res.json("Студентов пока нет...");
      }
      res.json(students);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о студентах",
      });
    }
  },
  showGroupStudents: async (req, res) => {
    try {
      const students = await Student.find({ group: req.params.id }).populate(
        "group",
        "name"
      );

      if (students.length === 0) {
        return res.json("Группа пуста...");
      }
      res.json(students);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о студентах",
      });
    }
  },
  showPayStudents: async (req, res) => {
    try {
      const pay = req.params.num;
      const students = await Student.find({ pay });
      if (students.length === 0) {
        return res.json("Студентов пока нет...").populate("group", "name");
      }
      res.json(students);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о студентах",
      });
    }
  },
  showStatusStudents: async (req, res) => {
    try {
      const students = await Student.find({ status: req.body.status }).populate(
        "group",
        "name"
      );

      if (students.length === 0) {
        return res.json("Студентов c таким статусом не найдено");
      }
      res.json(students);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о студентах",
      });
    }
  },
  showStudentPercent: async (req, res) => {
    try {
      const group = await Group.findById(req.params.group);
      const studentStatus = await Student.find({
        status: req.body.status,
        group: req.params.group,
      });
      const students = await Student.find({ group: req.params.group });

      const total = (100 / students.length) * studentStatus.length;

      if (!req.body.status) {
        return res.json("Статус не найден");
      }
      if (!group) {
        return res.json("Группа не найдена");
      }
      res.json(`${total}%`);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении данных о студентах" });
    }
  },
};
