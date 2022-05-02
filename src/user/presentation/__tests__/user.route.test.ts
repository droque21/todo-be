import request from 'supertest';
import { User } from '../../domain/entities/user.entity';
import * as UserUseCase from '../../domain/entities/user.use-case';
import { UserRouter } from '../user.route';
import server from '../../../server';

class MockGetUserByEmailUseCase implements UserUseCase.FindUserByEmailUseCase {
  async execute(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

class MockGetUserByUserNameUseCase implements UserUseCase.FindUserByUsernameUseCase {
  async execute(username: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

class MockSaveUserUseCaseUseCase implements UserUseCase.SaveUserUseCase {
  async execute(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

class MockUpdateUserUseCaseUseCase implements UserUseCase.UpdateUserUseCase {
  async execute(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

class MockDeleteUserUseCaseUseCase implements UserUseCase.DeleteUserUseCase {
  async execute(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

describe("Contact Router", () => {
  let mockGetUserByEmailUseCase: UserUseCase.FindUserByEmailUseCase;
  let mockGetUserByUserNameUseCase: UserUseCase.FindUserByUsernameUseCase;
  let mockSaveUserUseCaseUseCase: UserUseCase.SaveUserUseCase;
  let mockUpdateUserUseCaseUseCase: UserUseCase.UpdateUserUseCase;
  let mockDeleteUserUseCaseUseCase: UserUseCase.DeleteUserUseCase;

  beforeAll(() => {
    mockGetUserByEmailUseCase = new MockGetUserByEmailUseCase();
    mockGetUserByUserNameUseCase = new MockGetUserByUserNameUseCase();
    mockSaveUserUseCaseUseCase = new MockSaveUserUseCaseUseCase();
    mockUpdateUserUseCaseUseCase = new MockUpdateUserUseCaseUseCase();
    mockDeleteUserUseCaseUseCase = new MockDeleteUserUseCaseUseCase();
    server.use("/user", UserRouter(mockGetUserByEmailUseCase, mockGetUserByUserNameUseCase, mockSaveUserUseCaseUseCase, mockUpdateUserUseCaseUseCase, mockDeleteUserUseCaseUseCase));
  })

  beforeEach(() => {
    jest.clearAllMocks();
  })

  describe("GET /user/email/:email", () => {
    test("should return 200 with data", async () => {
      const ExpectedData: User = { id: "1", username: "test", email: "email@test.com" }
      jest.spyOn(mockGetUserByEmailUseCase, "execute").mockImplementation(() => Promise.resolve(ExpectedData))

      const response = await request(server).get("/user/email/:email")
      expect(response.status).toBe(200)
      expect(mockGetUserByEmailUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual({ user: ExpectedData })
    });

    test("GET /contact returns 500 on use case error", async () => {
      jest.spyOn(mockGetUserByEmailUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
      const response = await request(server).get("/user/email/:email")
      expect(response.status).toBe(500)
      expect(response.body).toStrictEqual({ message: "", error: {} })
    });
  })

  describe("GET /user/username/:username", () => {
    test("should return 200 with data", async () => {
      const ExpectedData: User = { id: "1", username: "test", email: "email@test.com" }
      jest.spyOn(mockGetUserByUserNameUseCase, "execute").mockImplementation(() => Promise.resolve(ExpectedData))

      const response = await request(server).get("/user/username/:username")
      expect(response.status).toBe(200)
      expect(mockGetUserByUserNameUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual({ user: ExpectedData })
    });

    test("GET /contact returns 500 on use case error", async () => {
      jest.spyOn(mockGetUserByUserNameUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
      const response = await request(server).get("/user/username/:username")
      expect(response.status).toBe(500)
      expect(response.body).toStrictEqual({ message: "", error: {} })
    });
  })

  describe("POST /user", () => {
    test("should return 200 with data", async () => {
      const ExpectedData: User = { id: "1", username: "test", email: "email@test.com" }
      jest.spyOn(mockSaveUserUseCaseUseCase, "execute").mockImplementation(() => Promise.resolve(ExpectedData))

      const response = await request(server).post("/user")
      expect(response.status).toBe(200)
      expect(mockSaveUserUseCaseUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual({ user: ExpectedData })
    });

    test("GET /contact returns 500 on use case error", async () => {
      jest.spyOn(mockSaveUserUseCaseUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
      const response = await request(server).post("/user")
      expect(response.status).toBe(500)
      expect(response.body).toStrictEqual({ message: "", error: {} })
    });
  })

  describe("Put /user", () => {
    test("should return 200 with data", async () => {
      const ExpectedData: User = { id: "1", username: "test", email: "email@test.com" }
      jest.spyOn(mockUpdateUserUseCaseUseCase, "execute").mockImplementation(() => Promise.resolve(ExpectedData))

      const response = await request(server).put("/user")
      expect(response.status).toBe(200)
      expect(mockUpdateUserUseCaseUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual({ user: ExpectedData })
    });

    test("GET /contact returns 500 on use case error", async () => {
      jest.spyOn(mockUpdateUserUseCaseUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
      const response = await request(server).put("/user")
      expect(response.status).toBe(500)
      expect(response.body).toStrictEqual({ message: "", error: {} })
    });
  })

  describe("Delete /user", () => {
    test("should return 200 with data", async () => {
      jest.spyOn(mockDeleteUserUseCaseUseCase, "execute").mockImplementation(() => Promise.resolve())

      const response = await request(server).delete("/user")
      expect(response.status).toBe(200)
      expect(mockDeleteUserUseCaseUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual({ message: "User deleted" })
    });

    test("GET /contact returns 500 on use case error", async () => {
      jest.spyOn(mockDeleteUserUseCaseUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
      const response = await request(server).delete("/user")
      expect(response.status).toBe(500)
      expect(response.body).toStrictEqual({ message: "", error: {} })
    });
  })
})