document.querySelector("button").addEventListener("click",myfunction);


//Player 1 Dicee
function myfunction(){
    var randomNumber1 = Math.random();
    randomNumber1=Math.floor(randomNumber1*6)+1;
    switch(randomNumber1){
        case 1: 
            document.querySelector(".img1").setAttribute("src" , "./images/dice1.png");
            break;
        case 2:    
            document.querySelector(".img1").setAttribute("src" , "./images/dice2.png");
            break;
        case 3: 
            document.querySelector(".img1").setAttribute("src" , "./images/dice3.png");
            break;
        case 4: 
            document.querySelector(".img1").setAttribute("src" , "./images/dice4.png");
            break;
        case 5: 
            document.querySelector(".img1").setAttribute("src" , "./images/dice5.png");
            break;
        case 6: 
            document.querySelector(".img1").setAttribute("src" , "./images/dice6.png");
            break;
    }

// Player 2 dicee

    var randomNumber2 = Math.random();
    randomNumber2=Math.floor(randomNumber2*6)+1;
    switch(randomNumber2){
        case 1: 
            document.querySelector(".img2").setAttribute("src" , "./images/dice1.png");
            break;
        case 2:    
            document.querySelector(".img2").setAttribute("src" , "./images/dice2.png");
            break;
        case 3: 
            document.querySelector(".img2").setAttribute("src" , "./images/dice3.png");
            break;
        case 4: 
            document.querySelector(".img2").setAttribute("src" , "./images/dice4.png");
            break;
        case 5: 
            document.querySelector(".img2").setAttribute("src" , "./images/dice5.png");
            break;
        case 6: 
            document.querySelector(".img2").setAttribute("src" , "./images/dice6.png");
            break;
    }

    if (randomNumber1>randomNumber2){
        document.querySelector("h2").textContent = "🚩Player 1 Wins!";
    }
    else if (randomNumber2>randomNumber1){
        document.querySelector("h2").textContent = "Player 2 Wins 🚩!"
    }
    else{
        document.querySelector("h2").textContent = "Draw!"
    }

}





