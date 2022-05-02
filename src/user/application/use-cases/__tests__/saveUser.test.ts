import { SaveUser } from "../saveUser";
import { MockUserRepository } from "../mock/mock";

describe("Get All Contacts Use Case", () => {
  let mockContactRepository: MockUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactRepository = new MockUserRepository()
  })

  test("should delete user", async () => {
    const user = { username: "test", password: "test", email: "test" }
    jest.spyOn(mockContactRepository, "save").mockImplementation(() => Promise.resolve(user))
    const saveUser = new SaveUser(mockContactRepository)
    const result = await saveUser.execute(user);
    expect(result).toStrictEqual(user);
  });
})