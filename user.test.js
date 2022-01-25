const User = require('./user')
describe("user class", () => {
  it("returns the name", () => {
    const user = new User("Uma");
    expect(user.getName()).toBe("Uma");
  });

  it("returns introduction", () => {
    const user = new User("Uma");
    expect(user.getIntroduction()).toBe("Hi, my name is Uma");
  });
});
