const Group = require("../models/Group.model");
const Student = require("../models/Student.model");
module.exports.groupController = {
  addGroup: async (req, res) => {
    try {
      const { name, learnWeek, learnEnd } = req.body;
      await Group.create({ name, learnWeek, learnEnd });
      res.json("Группа создана");
    } catch (err) {
      res.json({ err: "Произошла ошибка при создании группы" });
    }
  },
  deleteGroup: async (req, res) => {
    try {
      const group = await Group.findByIdAndDelete(req.params.id);

      if (!group) {
        return res.json("Группа не найдена");
      }
      res.json("Группа удалена");
    } catch (err) {
      res.json({ err: "Произошла ошибка при удалении группы" });
    }
  },
  updateGroup: async (req, res) => {
    try {
      const { name, learnWeek, learnEnd } = req.body;
      const group = await Group.findByIdAndUpdate(req.params.id, {
        name,
        learnWeek,
        learnEnd,
      });

      if (!group) {
        return res.json("Группа не найдена");
      }
      res.json("Информация группы обновлена");
    } catch (err) {
      res.json({ err: "Произошла ошибка при обновлении информации о группе" });
    }
  },
  showGroupById: async (req, res) => {
    try {
      const group = await Group.findById(req.params.id);

      if (!group) {
        return res.json("Группа не найдена");
      }
      res.json(group);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении информации о группе" });
    }
  },
  showAllGroups: async (req, res) => {
    try {
      const groups = await Group.find();

      if (groups.length === 0) {
        return res.json("Групп пока нет...");
      }
      res.json(groups);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении информации о группах" });
    }
  },
  showWeekGroups: async (req, res) => {
    try {
      const learnWeek = req.params.week;
      const groups = await Group.find({ learnWeek });

      if (groups.length === 0) {
        return res.json("Групп с такой неделей обучаемости не найдено");
      }
      if (learnWeek > 15) {
        return res.json("Групп с такой неделей обучаемости быть не может");
      }
      res.json(groups);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении информации о группах" });
    }
  },
  showFinishGroups: async (req, res) => {
    try {
      const groups = await Group.find({ learnEnd: true });

      if (groups.length === 0) {
        return res.json("Групп окончивших обучение не найдено");
      }
      res.json(groups);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении информации о группах" });
    }
  },
};
