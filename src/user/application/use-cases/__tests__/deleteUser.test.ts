import { DeleteUser } from "../deleteUser";
import { MockUserRepository } from "../mock/mock";

describe("Get All Contacts Use Case", () => {
  let mockContactRepository: MockUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactRepository = new MockUserRepository()
  })

  test("should delete user", async () => {
    jest.spyOn(mockContactRepository, "delete").mockImplementation(() => Promise.resolve())
    const deleteUser = new DeleteUser(mockContactRepository)
    const result = await deleteUser.execute("1");
    expect(result).toStrictEqual(undefined)
  });
})