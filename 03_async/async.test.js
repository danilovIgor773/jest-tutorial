const Ajax = require("./async");
const axios = require("axios");

jest.mock("axios");

describe("Ajax echo", () => {
  let testData = "";
  let error = "";
  beforeEach(() => {
    testData = "some async data";
    error = "async error";
  });
  test("should return", async () => {
    const result = await Ajax.echo(testData);
    expect(result).toBe(testData);
  });

  test("should return value with promise", () => {
    return Ajax.echo(testData).then((data) => {
      expect(data).toBe(testData);
    });
  });

  test("should catch error with promise", () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  test("should catch error with promise in try{}catch{} block", async () => {
    try {
      await Ajax.echo();
    } catch (err) {
      expect(err.message).toBe(error);
    }
  });
});

describe("Ajax GET:", () => {
  let response;
  let todos;
  beforeEach(() => {
    todos = [
      {
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
    ];
    response = {
      data: { todos },
    };
  });
  test("should return data from backend", () => {
    axios.get.mockResolvedValue(response);

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
