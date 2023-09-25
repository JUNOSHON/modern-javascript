let person = {
  name: "juno",
};
person.name = "jaeyoung";
console.log(person);

person.age = 24;
console.log(person);

delete person.age;
console.log(person);
