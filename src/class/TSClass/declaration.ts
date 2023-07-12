class Person{
    name:string

    constructor(name:string ) {

        this.name=name;
    }
    walk():void{
        console.log(`${this.name} is walking`);
    }
}
const person  =new Person('juno');
person.walk();
