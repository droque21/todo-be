import { Task } from "./task.entity";

export interface TaskRepository {
  findById(id: string): Promise<Task>;
  findAll(): Promise<Task[]>;
  save(task: Task): Promise<Task>;
  update(task: Task): Promise<Task>;
  delete(id: string): Promise<void>;
}