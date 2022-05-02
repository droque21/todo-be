import { GetUserByUsername } from "../getUserByUsername";
import { MockUserRepository } from "../mock/mock";

describe("Get All Contacts Use Case", () => {
  let mockContactRepository: MockUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactRepository = new MockUserRepository()
  })

  test("should delete user", async () => {
    const user = { username: "test", password: "test", email: "test" }
    jest.spyOn(mockContactRepository, "getUserByUsername").mockImplementation(() => Promise.resolve(user))
    const getUserByUsername = new GetUserByUsername(mockContactRepository)
    const result = await getUserByUsername.execute("test");
    expect(result).toStrictEqual(user)
  });

})