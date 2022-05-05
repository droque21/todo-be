import { Schema, model } from 'mongoose';
import { Task } from '../../../domain/entities/task';

const TaskSchema = new Schema<Task>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
  dueDate: { type: Number, required: false },
  subTasks: [{ type: Schema.Types.ObjectId, ref: 'SubTask' }],
  createdAt: { type: Number, required: false },
  updatedAt: { type: Number, required: false },
  createdBy: { type: String, required: false },
  updatedBy: { type: String, required: false }
});


export const TaskModel = model<Task>('Task', TaskSchema);