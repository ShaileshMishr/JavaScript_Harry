//Q1 Create a JS class to create a complex number. Create a constructor to set the real and the complex part.
//Q2 Write a method to add two complex numbers in the above class
//Q3 Create a class student from a class human override a method and see changes
//Q4 See if student is an instance of human using instanceof keyword.
//Q5 Use getters and setters to set and get the real and imaginary parts of the complex number


// Q1
// class Complex{
//     constructor(real, imaginary){
//         this.real=real
//         this.imaginary=imaginary
//     }
//     //Q2
//     add(num){
//         this.real  = this.real + num.real
//         this.imaginary = this.imaginary + num.imaginary
       
//     }
// }

// let a= new Complex(2,4)
// let b= new Complex(6,2)
// a.add(b)
// console.log(`${a.real}+${a.imaginary}i`)

// Q3
class Human{
    constructor(name, favfood){
        this.name=name
        this.favfood=favfood
    }
    walk(){
        console.log(this.name + " Human is walking")
    }
}


class Student extends Human{
    
    walk(){
        console.log(this.name + " Student is walking")
    }
}

// Q4
let o = new Student("Harry", "Bhindi")
o.walk()

console.log(o instanceof Human)

// Q5 ------------

console.log("................ Use getters and setters to set and get the real and imaginary parts of the complex number.....................")

class Complex{
    constructor(real, imaginary){
        this.real=real
        this.imaginary=imaginary
    }
   
    add(num){
        this.real  = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
       
    }
    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }

    set imaginary(newImaginary){
        this._imaginary = newImaginary
    }
    set real(newReal){
        this._real = newReal
    }
}

let a= new Complex(2,4)
a.real=10
a.imaginary=10
let b= new Complex(6,2)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)