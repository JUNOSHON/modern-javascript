function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello my name is juno`);
}
const me = new Person('juno');

console.log(me.sayHello());