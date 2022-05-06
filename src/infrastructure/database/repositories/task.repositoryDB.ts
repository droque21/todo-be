import { TaskModel } from "../models/task.model";
import { Task } from "../../../domain/entities/task";
import { SubTaskModel } from "../models/subTask.model";
import { SubTask } from "../../../domain/entities/subTask";
import { TaskRepository } from "../../../application/repositories/task.repository";


export const taskRepositoryDB = (): TaskRepository => {

  const createTask = async (task: Task): Promise<Task> => {
    const result = await TaskModel.create(task);
    return result as Task;
  }

  const getTasksFromUser = async (userId: string): Promise<Task[]> => {
    const result = await TaskModel.find({ createdBy: userId }).populate('subTasks');
    return result as Task[];
  }

  const addSubTaskToTask = async (taskId: string, subTask: SubTask): Promise<SubTask> => {
    const newSubTask = await SubTaskModel.create(subTask);
    await TaskModel.findByIdAndUpdate(taskId, { $push: { subTasks: newSubTask } });
    return newSubTask as SubTask;
  }

  const getTaskById = async (taskId: string): Promise<Task> => {
    const result = await TaskModel.findOne({ _id: taskId }).populate('subTasks');
    return result as Task;
  }

  return {
    createTask,
    getTasksFromUser,
    addSubTaskToTask,
    getTaskById
  }
}