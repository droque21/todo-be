import { Task } from "../../../domain/entities/task";
import { TaskRepository } from "../../repositories/task.repository";

export const getTasksFromUser = async (userId: string, taskRepository: TaskRepository): Promise<Task[]> => {
  const result = await taskRepository.getTasksFromUser(userId);
  return result;
}