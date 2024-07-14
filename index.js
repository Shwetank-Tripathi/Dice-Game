document.querySelector("button").addEventListener("click",myfunction);



function myfunction(){

//Player 1 Dicee
    var randomNumber1 = Math.random();
    randomNumber1=Math.floor(randomNumber1*6)+1;
    var randomSrc1 = "./images/dice"+randomNumber1+".png";
    document.querySelector(".img1").setAttributes("src" , randomSrc1);

// Player 2 dicee

    var randomNumber2 = Math.random();
    randomNumber2=Math.floor(randomNumber2*6)+1;
    var randomSrc2 = "./images/dice"+randomNumber2+".png";
    document.querySelector(".img2").setAttributes("src" , randomSrc2);

// Winner

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





