import { Router } from "express";
import userController from "../controllers/userController.js";

const UserRoute = Router();

/**
 * @swagger
 * /v1/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     description: Retorna uma lista de todos os usuários cadastrados.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/schemas/users'
 */
UserRoute.get("/", userController.findAll);

/**
 * @swagger
 * /v1/users/{id}:
 *   get:
 *     summary: Retorna um usuário específico
 *     description: Retorna os detalhes de um usuário com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário a ser recuperado
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/users'
 *       404:
 *         description: Usuário não encontrado
 */
UserRoute.get("/:id", userController.findUser);

/**
 * @swagger
 * /v1/users:
 *   post:
 *     summary: Registra um novo usuário
 *     description: Registra um novo usuário com os detalhes fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/userInputs'
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/users'
 */
UserRoute.post("/", userController.registerUser);

/**
 * @swagger
 * /v1/users/login:
 *   post:
 *     summary: Loga um usuário
 *     description: Autentica um usuário com as credenciais fornecidas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/uoginInputs'
 *     responses:
 *       200:
 *         description: Usuário logado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
UserRoute.post("/login", userController.singInUser);

/**
 * @swagger
 * /v1/users/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     description: Remove um usuário com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário a ser removido
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
UserRoute.delete("/:id", userController.deleteUser);

export default UserRoute;