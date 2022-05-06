import { Task } from "../../../domain/entities/task";
import { TaskRepository } from "../../repositories/task.repository";

export const createTask = async (task: Task, taskRepository: TaskRepository): Promise<Task> => {
  const result = await taskRepository.createTask(task);
  return result;
}