import express from "express";
import { todoController } from "../controller/todoController.js";

const todoRouter = express.Router();

//get all
todoRouter.get("/", todoController.getAll);

//get by id
todoRouter.get("/:id", todoController.getById);

// create todo

todoRouter.post("/", todoController.createTodo);

//update todo

todoRouter.patch("/:id", todoController.updateTodo);

// delete todo
todoRouter.delete("/:id", todoController.deleteTodo);

export { todoRouter };
