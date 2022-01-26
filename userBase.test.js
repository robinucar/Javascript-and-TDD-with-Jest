const UserBase = require("./userBase");
const User = require("./user");
describe("userBase class", () => {
  const userBase = new UserBase(
    new User("Uma"),
    new User("Josh"),
    new User("Ollie")
  );
  it("returns the number of users", () => {
    expect(userBase.count()).toEqual(3);
  });

  it("returns the name of users", () => {
    expect(userBase.getNames()).toEqual(["Uma", "Josh", "Ollie"]);
  });

  it("returns the introduction of users", () => {
    expect(userBase.getIntroductions()).toEqual([
      "Hi, my name is Uma",
      "Hi, my name is Josh",
      "Hi, my name is Ollie",
    ]);
  });
});
