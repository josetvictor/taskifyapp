import TaskModel from "../schemas/tasks.js";

function findAll(req, res) {
  TaskModel.findAll().then((result) => res.json(result));
}

function findTask(req, res) {
  TaskModel.findByPk(req.params.id).then((result) => res.json(result));
}

function addTask(req, res) {
  TaskModel.create({
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  }).then((result) => res.json(result));
}

async function deleteTask(req, res) {
  await TaskModel.destroy({
    where: {
      id: req.params.id,
    },
  });

  TaskModel.findAll().then((result) => res.json(result));
}

export default { findAll, findTask, addTask, deleteTask };
