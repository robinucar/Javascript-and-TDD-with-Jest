const User = require("./user");

class UserBase {
  constructor(...names) {
    this.names = names;
  }
  count() {
    return this.names.length;
  }

  getNames() {
    return this.names.map((user) => {
      return user.getName();
    });
  }

  getIntroductions() {
    return this.names.map((user) => {
      return user.getIntroduction();
    });
  }
}

const u = new UserBase(new User('Uma'), new User('Josh'), new User('Ollie'));
console.log(u.count());
console.log(u.getNames());
console.log(u.getIntroductions());

module.exports = UserBase;
