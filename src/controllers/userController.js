import UserModel from "../schemas/users.js";

function findAll(req, res) {
  UserModel.findAll().then((result) => res.json(result));
}

function findUser(req, res) {
  UserModel.findByPk(req.params.id).then((result) => res.json(result));
}

function addUser(req, res) {
  UserModel.create({
    username: req.body.username,
    password: req.body.password,
  }).then((result) => res.json(result));
}

async function deleteUser(req, res) {
  await UserModel.destroy({
    where: {
      id: req.params.id,
    },
  });

  UserModel.findAll().then((result) => res.json(result));
}

export default { findAll, addUser, deleteUser, findUser };
