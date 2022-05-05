import { Schema, model } from 'mongoose';
import { SubTask } from '../../../domain/entities/subTask';

const SubTaskSchema = new Schema<SubTask>({
  taskId: { type: String, required: true },
  name: { type: String, required: true },
  completed: { type: Boolean, required: true }
});


export const SubTaskModel = model<SubTask>('SubTask', SubTaskSchema);