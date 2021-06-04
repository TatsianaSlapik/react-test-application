import { getProducts } from "./api";
import "@babel/polyfill";

describe("API tests", () => {
  const testValue = [
    {
      testField: "test_value",
    },
  ];
  const toJson = (value) => () => Promise.resolve(value);
  const setFetch = (params) => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({ ...params });
    });
  };
  beforeEach(() => {
    setFetch({ json: toJson(testValue) });
  });
  afterEach(() => {
    fetch.mockRestore();
  });

  it("Should return promise with products", async () => {
    const resp = await getProducts();

    expect(resp).toEqual(testValue);
  });
});
