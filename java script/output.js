class MyClass {
    constructor(x) {
        console.log("constructor is called!");
        this.x=x;
    }
 }
 
 const obj = new MyClass();
 console.log(obj.x);