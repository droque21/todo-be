import { UpdateUser } from "../updateUser";
import { MockUserRepository } from "../mock/mock";

describe("Get All Contacts Use Case", () => {
  let mockContactRepository: MockUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactRepository = new MockUserRepository()
  })

  test("should delete user", async () => {
    const user = { username: "test", password: "test", email: "test" }
    jest.spyOn(mockContactRepository, "update").mockImplementation(() => Promise.resolve(user))
    const updatedUser = new UpdateUser(mockContactRepository)
    const result = await updatedUser.execute(user);
    expect(result).toStrictEqual(user);
  });
})