function refresh(){
    var nameImg=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
    ////player 1////////////
    function boss(){
        var imgRandom=nameImg[Math.floor(Math.random()*nameImg.length)];
        return imgRandom;
    }
    var player1=boss();
    document.querySelectorAll("img")[0].setAttribute("src","../images/"+player1);
//////player 2////////
function boss2(){
    var imgRandom2=nameImg[Math.floor(Math.random()*nameImg.length)];
    return imgRandom2;
}
var player2=boss2();
document.querySelectorAll("img")[1].setAttribute("src","../images/"+player2);


/////title/////////
if(player2>player1){
    document.querySelector("h1").innerHTML="بازیکن 2 برنده شد";
}
else if(player2==player1){
    document.querySelector("h1").innerHTML="دو بازیکن برابر شدند";
}
else {
    document.querySelector("h1").innerHTML="بازیکن 1 برنده شد";
}
document.querySelector("input").setAttribute("value","دوباره");
}