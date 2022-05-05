import { Task } from "../../domain/entities/task";

export interface TaskRepository {
  createTask(task: Task): Promise<Task>;
}