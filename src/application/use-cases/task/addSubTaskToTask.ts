import { SubTask } from "../../../domain/entities/subTask";
import { generateCustomError } from "../../../infrastructure/webserver/helpers/error";
import { TaskRepository } from "../../repositories/task.repository";

export const addSubTaskToTask = async (taskId: string, subTask: SubTask, taskRepository: TaskRepository): Promise<SubTask> => {
  try {
    const task = Boolean(await taskRepository.getTaskById(taskId));
    if (!task) generateCustomError(404, "Task not found");
  } catch (error) {
    generateCustomError(404, "Task not found");
  }
  const result = await taskRepository.addSubTaskToTask(taskId, subTask);
  return result;
}
