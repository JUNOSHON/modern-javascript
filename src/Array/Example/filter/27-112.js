class Users {
  constructor() {
    this.users = [
      {id: 1, name: "lee"},
      {id: 2, name: "kim"},
    ];
  }
  
  findById(id) {
    return this.users.filter(user => user.id === id);
  }
  
  remove(id) {
    this.users = this.users.filter(user => user.id !== id);
  }
  
}

const users = new Users();
let user = users.findById(1);
console.log(user);
users.remove(1);
user = users.findById(1);
console.log(user);
