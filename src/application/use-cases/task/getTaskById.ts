import { Task } from "../../../domain/entities/task";
import { TaskRepository } from "../../repositories/task.repository";

export const getTaskById = async (taskId: string, taskRepository: TaskRepository): Promise<Task> => {
  const result = await taskRepository.getTaskById(taskId);
  return result;
}
