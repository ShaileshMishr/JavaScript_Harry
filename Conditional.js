let a = prompt("Hey whats your age?");
a = Number.parseInt(a) // converting the string to a number
if(a<0){
    alert("This is an Invalid age");
}
else if(a<9){
    alert("You are a kid ");
}
else if(a<18 && a>=9){
    alert("You are a kid you can drive after 18");
}
else{
    alert("Valid age you can drive");
}
// ternay operator
console.log("You Can", a<18? "not drive" :"drive")



