import { GetUserByEmail } from "../getUserByEmail";
import { MockUserRepository } from "../mock/mock";

describe("Get All Contacts Use Case", () => {
  let mockContactRepository: MockUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactRepository = new MockUserRepository()
  })

  test("should delete user", async () => {
    const user = { username: "test", password: "test", email: "test" }
    jest.spyOn(mockContactRepository, "getUserByEmail").mockImplementation(() => Promise.resolve(user))
    const getUserByEmail = new GetUserByEmail(mockContactRepository)
    const result = await getUserByEmail.execute("1");
    expect(result).toStrictEqual(user)
  });

})