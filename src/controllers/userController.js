import "dotenv/config";
import UserSchema from "../schemas/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function findAll(req, res) {
  try {
    const usersAll = await UserSchema.findAll();

    return res.status(200).json(usersAll);
  } catch (error) {
    return res.status(500).json({ message: "error in finding users" });
  }
}

async function findUser(req, res) {
  UserSchema.findByPk(req.params.id).then((result) => res.json(result));

  try {
    const userfound = await UserSchema.findOne({ where: { id: req.params.id } });

    if(!userfound) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(userfound);
  } catch (error) {
    return res.status(500).json({ message: "error in finding user" });
  }
}

async function registerUser(req, res) {
  try {
    const { username, password } = req.body;

    const userExist = await UserSchema.findOne({ where: { username } });

    if(userExist) return res.status(400).json({ message: "User already exist" });

    await UserSchema.create({
      username, 
      password: await bcrypt.hash(password, 15)
    });

    return res.status(201).json({ message: "User created successfully" });
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function singInUser(req, res) {
  try {
    const { username, password } = req.body;
    const user = await UserSchema.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(404).json("username not found");
    }

    // Verify password
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(404).json("Incorrect email and password combination");
    }

    // Authenticate user with jwt
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION,
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      accessToken: token,
    });
  } catch (err) {
    return res.status(500).send("Sign in error");
  }
};

async function deleteUser(req, res) {
  await UserSchema.destroy({
    where: {
      id: req.params.id,
    },
  });

  UserSchema.findAll().then((result) => res.json(result));

  try {
    const user = await UserSchema.findOne({ where: { id: req.params.id } });

    if(!user) {
      return res.status(404).json({ message: "User not exists" });
    }

    await UserSchema.destroy({ where: { id: req.params.id } });

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error in deleting user" });
  }
}

export default { findAll, registerUser, singInUser, deleteUser, findUser };
