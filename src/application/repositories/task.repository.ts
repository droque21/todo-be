import { SubTask } from "../../domain/entities/subTask";
import { Task } from "../../domain/entities/task";

export interface TaskRepository {
  createTask(task: Task): Promise<Task>;
  getTasksFromUser(userId: string): Promise<Task[]>;
  addSubTaskToTask(taskId: string, subTask: SubTask): Promise<SubTask>;
  getTaskById(taskId: string): Promise<Task>;
}