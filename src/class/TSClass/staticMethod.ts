class Foo{
    static instanceCounter = 0;
    constructor() {
        Foo.instanceCounter++;
    }
}
var foo1 = new Foo();
var foo2 = new Foo();

console.log(Foo.instanceCounter);
console.log(foo2.instanceCounter)
