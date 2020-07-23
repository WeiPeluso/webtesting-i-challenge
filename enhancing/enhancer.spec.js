const enhancer = require("./enhancer.js");
// test away!

describe("repair()", function () {
  it("should return an object with durability restored to 100", () => {
    const item = { name: "item1", durability: 90, enhancement: 10 };
    const expected = { ...item, durability: 100 };
    const repairedItem = enhancer.repair(item);
    expect(repairedItem).toMatchObject(expected);
  });
});

describe("success()", function () {
  it("when enhancement level is 20, return same object", () => {
    const item = { name: "item1", durability: 90, enhancement: 20 };
    const afterSuccess = enhancer.success(item);
    expect(afterSuccess).toMatchObject(item);
  });

  it("when enhancement level is less than 20, the enhancement increase 1", () => {
    const item = { name: "item1", durability: 90, enhancement: 10 };
    const afterSuccess = enhancer.success(item);
    const expected = { ...item, enhancement: 11 };
    expect(afterSuccess).toMatchObject(expected);
  });
});

describe("fails()", function () {
  it("when enhancement level is less than 15, the durability of the item is decreased by 5", () => {
    const item = { name: "item1", durability: 90, enhancement: 13 };
    const afterFail = enhancer.fail(item);
    const expected = { ...item, durability: 85 };
    expect(afterFail).toMatchObject(expected);
  });
  it("when enhancement level is 15 and 16, the durability of the item is decreased by 10", () => {
    const item1 = { name: "item1", durability: 90, enhancement: 15 };
    const item2 = { name: "item2", durability: 100, enhancement: 16 };
    const item1AfterFail = enhancer.fail(item1);
    const item1Expected = { ...item1, durability: 80 };
    const item2AfterFail = enhancer.fail(item2);
    const item2Expected = { ...item2, durability: 90 };
    expect(item1AfterFail).toMatchObject(item1Expected);
    expect(item2AfterFail).toMatchObject(item2Expected);
  });
  it("when enhancement level is larger 16, the durability of the item is decreased by 1", () => {
    const item = { name: "item1", durability: 90, enhancement: 19 };
    const afterFail = enhancer.fail(item);
    const expected = { ...item, durability: 89 };
    expect(afterFail).toMatchObject(expected);
  });
});

describe("get()", function () {
  it("should return same object if enhancement is 0", () => {
    const item = { name: "item1", durability: 90, enhancement: 0 };
    const expected = { ...item };
    const repairedItem = enhancer.get(item);
    expect(repairedItem).toMatchObject(expected);
  });

  it("should return same object if enhancement is not 0", () => {
    const item = { name: "item1", durability: 90, enhancement: 2 };
    const expected = { ...item, name: "+[2]item1" };
    const repairedItem = enhancer.get(item);
    expect(repairedItem).toMatchObject(expected);
  });
});
