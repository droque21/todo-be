export interface Task {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
  updatedBy: string;
}

export interface SubTask {
  id: string;
  taskId: string;
  name: string;
  completed: boolean;
}