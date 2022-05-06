import { Task } from "../../../domain/entities/task";
import { TaskRepository } from "../task.repository";

describe("Get All Contacts Use Case", () => {

  const mockTaskRepositoryImpl = (): TaskRepository => {
    const createTask = (task: Task): Promise<Task> => {
      throw new Error("Method not implemented.");
    }
    return {
      createTask
    };
  }
  let mockTaskRepository = mockTaskRepositoryImpl();

  beforeEach(() => {
    jest.clearAllMocks();
    mockTaskRepository = mockTaskRepositoryImpl()
  })

  test("should return data when creating a task", async () => {
    const expectedResult: Task = {
      id: "1",
      name: "Task 1",
      description: "Task 1",
      completed: false,
      dueDate: 1,
      subTasks: [],
      createdAt: 1,
      updatedAt: 1,
      createdBy: '',
      updatedBy: ''
    };

    jest.spyOn(mockTaskRepository, "createTask").mockImplementation(() => Promise.resolve(expectedResult))
    const result = await mockTaskRepository.createTask(expectedResult)
    expect(result).toStrictEqual(expectedResult)

  });

})