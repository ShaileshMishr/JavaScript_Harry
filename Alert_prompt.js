alert("Enter the value of a ")
let a = prompt("Enter a here")
a = Number.parseInt(a)
alert("you entered a of type " + (typeof a))
// document.write(a)

// confirm
let write = confirm("DO you want to write to the page")

if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}

