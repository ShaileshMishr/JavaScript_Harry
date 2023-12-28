// WAP to create a game of snake water nd gun. the game should
// ask you to enter S,W or G. The computer should be able to randamly generate S,W or G and declare Win or Loss 
// using alert use confirm and prompt whenever required.

// G>S  // S>W // W>G 

let runAgain = true;
let arr = ["snake", "water","gun"];
// let game = arr[Math.floor(Math.random() * arr.length)];
// console.log(game);

while (runAgain) {
    let game = arr[Math.floor(Math.random() * arr.length)];
console.log(game);
    let word = prompt("Choose one of these: Snake , Water or Gun").toLowerCase();;
    a = confirm("Are you sure for " + word)
    if((word.match("snake")) || (word.match("water")) || (word.match("gun"))){
        if((game.match("snake") && word.match("water")) || (game.match("gun") && word.match("snake")) || (game.match("water") && word.match("gun"))){
            alert("Hey you Loss")
        }
        else if((game.match("snake") && word.match("snake")) || (game.match("gun") && word.match("gun")) || (game.match("water") && word.match("water"))){
            alert("Draw")
        }
        else{
            alert("Hey you Won")
        }
    }

    else{
        alert("You choose wrong word")
        //break;
    }
    runAgain = confirm("Do you want to play again?")
}

