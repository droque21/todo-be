import { SubTask } from "./subTask";

export interface Task {
  id?: string;
  name: string;
  description: string;
  completed: boolean;
  dueDate?: number;
  subTasks?: SubTask[];
  createdAt?: number;
  updatedAt?: number;
  createdBy?: string;
  updatedBy?: string;
}