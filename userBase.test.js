const UserBase = require('./userBase')
describe("userBase class", () => {
  it("returs the number of users", () => {
    const users = ['Uma', 'Josh', 'Ollie'];
    const userBase = new UserBase(users);
    expect(userBase.count()).toEqual(3);
  });

  it("returns the name of users", () => {
    const users = ['Uma', 'Josh', 'Ollie']

    const userBase = new UserBase(users);
    expect(userBase.getNames()).toEqual(["Uma", "Josh", "Ollie"]);
  });

  it("returns the introduction of users", () => {
    const users = ['Uma', 'Josh', 'Ollie']
    const userBase = new UserBase(users);
    expect(userBase.getIntroductions()).toEqual([
      "Hi, my name is Uma",
      "Hi, my name is Josh",
      "Hi, my name is Ollie",
    ]);
  });
});
