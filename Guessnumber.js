let x = Math.floor((Math.random() * 100) + 1);
console.log(x)
let n;
do{
    n= prompt("Enter a number");
    n=Number.parseInt(n)
}
while(x!=n);
console.log("You Guess Correct Number")
