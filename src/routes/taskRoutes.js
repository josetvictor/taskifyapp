import { Router } from "express";
import taskController from "../controllers/taskController.js";
import authenticateToken from "../middleware/ensureAuthenticatedMiddleware.js";

const TaskRoute = Router();

/**
 * @swagger
 * /v1/tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     description: Retorna uma lista de todas as tarefas cadastradas.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/schemas/tasks'
 */
TaskRoute.get("/", authenticateToken, taskController.findAll);

/**
 * @swagger
 * /v1/tasks/{id}:
 *   get:
 *     summary: Retorna uma tarefa específica
 *     description: Retorna os detalhes de uma tarefa com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa a ser recuperada
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/tasks'
 *       404:
 *         description: Tarefa não encontrada
 */
TaskRoute.get("/:id", taskController.findTask);

/**
 * @swagger
 * /v1/tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     description: Cria uma nova tarefa com os detalhes fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/tasks'
 */
TaskRoute.post("/", taskController.addTask);

/**
 * @swagger
 * /v1/tasks/{id}:
 *   delete:
 *     summary: Remove uma tarefa existente
 *     description: Remove uma tarefa existente com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa a ser removida
 *     responses:
 *       204:
 *         description: Tarefa removida com sucesso
 *       404:
 *         description: Tarefa não encontrada
 */
TaskRoute.delete("/:id", taskController.deleteTask);

export default TaskRoute;