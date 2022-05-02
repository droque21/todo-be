import request from 'supertest';
import { User } from '../../domain/user.entity';
import * as UserUseCase from '../../domain/user.use-case';
import { UserRouter } from '../user.route';
import server from '../../../server';

class MockGetUserByEmailUseCase implements UserUseCase.FindUserByEmail {
  async execute(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

class MockGetUserByUserNameUseCase implements UserUseCase.FindUserByUsername {
  async execute(username: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

class MockSaveUserUseCase implements UserUseCase.SaveUser {
  async execute(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

class MockUpdateUserUseCase implements UserUseCase.UpdateUser {
  async execute(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

class MockDeleteUserUseCase implements UserUseCase.DeleteUser {
  async execute(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

describe("Contact Router", () => {
  let mockGetUserByEmailUseCase: UserUseCase.FindUserByEmail;
  let mockGetUserByUserNameUseCase: UserUseCase.FindUserByUsername;
  let mockSaveUserUseCase: UserUseCase.SaveUser;
  let mockUpdateUserUseCase: UserUseCase.UpdateUser;
  let mockDeleteUserUseCase: UserUseCase.DeleteUser;

  beforeAll(() => {
    mockGetUserByEmailUseCase = new MockGetUserByEmailUseCase();
    mockGetUserByUserNameUseCase = new MockGetUserByUserNameUseCase();
    mockSaveUserUseCase = new MockSaveUserUseCase();
    mockUpdateUserUseCase = new MockUpdateUserUseCase();
    mockDeleteUserUseCase = new MockDeleteUserUseCase();
    server.use("/user", UserRouter(mockGetUserByEmailUseCase, mockGetUserByUserNameUseCase, mockSaveUserUseCase, mockUpdateUserUseCase, mockDeleteUserUseCase));
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
      jest.spyOn(mockSaveUserUseCase, "execute").mockImplementation(() => Promise.resolve(ExpectedData))

      const response = await request(server).post("/user")
      expect(response.status).toBe(200)
      expect(mockSaveUserUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual({ user: ExpectedData })
    });

    test("GET /contact returns 500 on use case error", async () => {
      jest.spyOn(mockSaveUserUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
      const response = await request(server).post("/user")
      console.log(response.body)
      expect(response.status).toBe(500)
      expect(response.body).toStrictEqual({ message: "", error: {} })
    });
  })

  describe("Put /user", () => {
    test("should return 200 with data", async () => {
      const ExpectedData: User = { id: "1", username: "test", email: "email@test.com" }
      jest.spyOn(mockUpdateUserUseCase, "execute").mockImplementation(() => Promise.resolve(ExpectedData))

      const response = await request(server).put("/user")
      expect(response.status).toBe(200)
      expect(mockUpdateUserUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual({ user: ExpectedData })
    });

    test("GET /contact returns 500 on use case error", async () => {
      jest.spyOn(mockUpdateUserUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
      const response = await request(server).put("/user")
      console.log(response.body)
      expect(response.status).toBe(500)
      expect(response.body).toStrictEqual({ message: "", error: {} })
    });
  })

  describe("Delete /user", () => {
    test("should return 200 with data", async () => {
      jest.spyOn(mockDeleteUserUseCase, "execute").mockImplementation(() => Promise.resolve())

      const response = await request(server).delete("/user")
      expect(response.status).toBe(200)
      expect(mockDeleteUserUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual({ message: "User deleted" })
    });

    test("GET /contact returns 500 on use case error", async () => {
      jest.spyOn(mockDeleteUserUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
      const response = await request(server).delete("/user")
      console.log(response.body)
      expect(response.status).toBe(500)
      expect(response.body).toStrictEqual({ message: "", error: {} })
    });
  })
})