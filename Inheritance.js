class Animal{
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is runing! ")
    }
    shout(){
        console.log(this.name + " is shouting!")
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + " is eating banana")
    }
    hide(){
        console.log(`${this.name } is hiding`)
    }
}

let ani = new Animal("Bruno", "white")
let m = new Monkey("Chimpu", "orange")

ani.shout()
m.eatBanana()
m.hide()
// ani.hide()  ==  this will through a error parents did not take the property of child