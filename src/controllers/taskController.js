import TaskSchema from "../schemas/tasks.js";

async function findAll(req, res) {
  try {
    const tasksAll = await TaskSchema.findAll();

    return res.status(200).json(tasksAll);
  } catch (error) {
    return res.status(500).json({ message: "error in finding tasks" });
  }
}

async function findTask(req, res) {
  try {
    const taskfound = await TaskSchema.findOne({ where: { id: req.params.id } });

    if(!taskfound) { return res.status(404).json({ message: "Task not found" }) }

    return res.status(200).json(taskfound);
  } catch (error) {
    return res.status(500).json({ message: "error in finding task" });
  }
}

async function addTask(req, res) {
  try {
    const { user_id, title, description, completed } = req.body;

    const taskCreated = await TaskSchema.create({
      user_id,
      title,
      description,
      completed,
    });

    return res.status(201).json({ message: "Task created successfully", taskCreated });
    
  } catch (error) {
    return res.status(500).json({ message: "error in adding task" });
  }
}

async function deleteTask(req, res) {
  await TaskSchema.destroy({
    where: {
      id: req.params.id,
    },
  });

  TaskSchema.findAll().then((result) => res.json(result));

  try {
    const {id} = req.params;
    const task = await TaskSchema.findOne({ where: { id } });

    if(!task) {
      return res.status(404).json({ message: "Task not exists" });
    }

    await TaskSchema.destroy({ where: { id } });

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error in deleting task" });
  }
}

export default { findAll, findTask, addTask, deleteTask };
