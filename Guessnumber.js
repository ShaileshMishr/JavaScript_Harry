let x = Math.floor((Math.random() * 100) + 1);
console.log(x)
let n;
let i=0;
do{
    n= prompt("Enter a number");
    n=Number.parseInt(n)
    i=i+1;
}
while(x!=n);

console.log("You Guess Correct Number in " + i + " Chance")
