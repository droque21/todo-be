import { UserDataSource } from "../../../infrastructure/user.data-source";
import { User } from "../../entities/user.entity";
import { UserRepository } from "../../entities/user.repository";
import { UserRepositoryImpl } from "../userReposiroty";

class MockContactDataSource implements UserDataSource {
  async getUserByUsername(username: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async getUserByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async save(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async update(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

describe("Contact Repository", () => {
  let mockUserDataSource: UserDataSource;
  let userRepository: UserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUserDataSource = new MockContactDataSource()
    userRepository = new UserRepositoryImpl(mockUserDataSource)
  })

  describe("getUserByUsername", () => {
    test("should return data", async () => {
      const expectedData: User = { id: "1", username: "test", email: "test@test.com" };
      jest.spyOn(mockUserDataSource, "getUserByUsername").mockImplementation(() => Promise.resolve(expectedData))
      const result = await userRepository.getUserByUsername("test");
      expect(result).toBe(expectedData)
    });
  })

  describe("getUserByEmail", () => {
    test("should return data", async () => {
      const expectedData: User = { id: "1", username: "test", email: "test@test.com" }
      jest.spyOn(mockUserDataSource, "getUserByEmail").mockImplementation(() => Promise.resolve(expectedData))
      const result = await userRepository.getUserByEmail("test@test.com");
      expect(result).toBe(expectedData)
    });
  })

  describe("save", () => {
    test("should return data", async () => {
      const expectedData: User = { id: "1", username: "test", email: "test@test.com" }
      jest.spyOn(mockUserDataSource, "save").mockImplementation(() => Promise.resolve(expectedData))
      const result = await userRepository.save(expectedData);
      expect(result).toBe(expectedData)
    });
  });

  describe("update", () => {
    test("should return data", async () => {
      const expectedData: User = { id: "1", username: "test", email: "test@test.com" }
      jest.spyOn(mockUserDataSource, "update").mockImplementation(() => Promise.resolve(expectedData))
      const result = await userRepository.update(expectedData);
      expect(result).toBe(expectedData)
    });
  });

  describe("delete", () => {
    test("should return data", async () => {
      const expectedData: User = { id: "1", username: "test", email: "test@test.com" }
      jest.spyOn(mockUserDataSource, "delete").mockImplementation(() => Promise.resolve())
      const result = await userRepository.delete(expectedData.id!);
      expect(result).toBe(undefined)
    });
  })
})