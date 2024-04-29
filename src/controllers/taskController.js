import TaskSchema from "../schemas/tasks.js";

function findAll(req, res) {
  TaskSchema.findAll().then((result) => res.json(result));
}

function findTask(req, res) {
  TaskSchema.findByPk(req.params.id).then((result) => res.json(result));
}

function addTask(req, res) {
  TaskSchema.create({
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  }).then((result) => res.json(result));
}

async function deleteTask(req, res) {
  await TaskSchema.destroy({
    where: {
      id: req.params.id,
    },
  });

  TaskSchema.findAll().then((result) => res.json(result));
}

export default { findAll, findTask, addTask, deleteTask };
