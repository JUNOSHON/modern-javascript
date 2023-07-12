abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log(`movemove`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('bark');
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
