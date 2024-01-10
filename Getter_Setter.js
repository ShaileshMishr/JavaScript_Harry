class Animal {
    constructor(name) {
        this._name=name
    }
    fly(){
        console.log("I am flying")
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating carrot")
    }
}

let a = new Rabbit("Bruno")
a.fly();
console.log(a.name)
a.name="Jack"
console.log(a.name)

// Instanceof operator- It allows to check whether an object belongs to a certain class.
// It returns true if obj belongs to the class or any other class inheriting from it.

let c =56;

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)
