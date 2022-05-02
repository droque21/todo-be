export interface Task {
  id: string;
  name: string;
  description: string;
  subTasks: SubTask[];
  completed: boolean;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
  updatedBy: string;
}

export interface SubTask {
  id: string;
  name: string;
  completed: boolean;
}