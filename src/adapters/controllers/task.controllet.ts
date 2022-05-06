import { Task } from "../../domain/entities/task";
import { SubTask } from "../../domain/entities/subTask";
import { TaskRepository } from "../../application/repositories/task.repository";
import * as TaskUseCase from "../../application/use-cases/task";
import { RequestCustom } from "../../infrastructure/webserver/interfaces/express";
import { AuthServiceRepository } from "../../application/repositories/authService.repository";

export const taskController = (taskRepository: TaskRepository) => {

  const createTask = async (req: RequestCustom<Task>, res: any, next: any) => {
    const task: Task = {
      ...req.body,
      completed: false,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      createdBy: req.user.id,
      updatedBy: req.user.id,
      subTasks: []
    }
    try {
      const result = await TaskUseCase.createTask(task, taskRepository);
      res.json({ task: result });
    } catch (error) {
      next(error)
    }
  }

  return {
    createTask
  }

}