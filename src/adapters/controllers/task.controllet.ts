import { Task } from "../../domain/entities/task";
import { SubTask } from "../../domain/entities/subTask";
import { TaskRepository } from "../../application/repositories/task.repository";
import * as TaskUseCase from "../../application/use-cases/task";
import { RequestCustom, RequestWithUser } from "../../infrastructure/webserver/interfaces/express";

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

  const getTasksFromUser = async (req: RequestWithUser, res: any, next: any) => {
    try {
      const userId = req.user.id
      const result = await TaskUseCase.getTasksFromUser(userId, taskRepository);
      res.json({ tasks: result });
    } catch (error) {
      next(error)
    }
  }

  const addSubTaskToTask = async (req: RequestCustom<SubTask>, res: any, next: any) => {
    const taskId = req.params.taskId;
    const subTask = {
      ...req.body,
      completed: false,
      taskId
    };
    try {
      const result = await TaskUseCase.addSubTaskToTask(taskId, subTask, taskRepository);
      res.json({ subTask: result });
    } catch (error) {
      next(error)
    }
  }

  const getTaskById = async (req: RequestCustom<Task>, res: any, next: any) => {
    const taskId = req.params.taskId;
    try {
      const result = await TaskUseCase.getTaskById(taskId, taskRepository);
      res.json({ task: result });
    } catch (error) {
      next(error)
    }
  }

  return {
    createTask,
    getTasksFromUser,
    addSubTaskToTask,
    getTaskById
  }
}