const sayHello = (name, greeting) => console.log(greeting + " " +name)

const x = {
    name: "Kishan",
    role: "Js Developer",
    exp: 13,
    show: function() {
     setTimeout(() =>{
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    }, 2000)
    }
}
// sayHello("Kishan", "Good Morning")
// console.log(x.name, x.exp)
x.show()