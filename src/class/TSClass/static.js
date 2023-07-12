class Foo {
    constructor(props) {
        this.props = props;
    }
    
    static staticMethod() {
        return 'staticMethod';
    }
    
    prototypeMethod() {
        return this.props;
    }
}

console.log(Foo.staticMethod());
const foo = new Foo(123);
console.log(foo.staticMethod());
