const User = require("./user");

class UserBase {
    constructor() {
        this.names = [
            new User('Uma'),
            new User('Josh'),
            new User('Ollie')
        ]
        
    }
    count() {
        
        return this.names.length
       
    }

    getNames() {
        return this.names.map(user => {
            return user.getName()
        })
    }

    getIntroductions() {
        return this.names.map(user => {
            return user.getIntroduction()
        })
        
    }
}

const u = new UserBase()
console.log(u)
console.log(u.count())
console.log(u.getNames())
console.log(u.getIntroductions())

module.exports = UserBase;