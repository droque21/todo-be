import { Schema, model } from 'mongoose';
import { SubTask } from '../../../domain/entities/subTask';

const SubTaskSchema = new Schema<SubTask>({
  taskId: { type: String, required: true },
  name: { type: String, required: true },
  completed: { type: Boolean, required: true }
});

SubTaskSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
})


export const SubTaskModel = model<SubTask>('SubTask', SubTaskSchema);