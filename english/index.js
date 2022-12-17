function refresh() {
//image player 1/////////////////////////////////////////
var images=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
function boss(){
    var nameImage=images[ Math.floor(Math.random()*images.length) ];
    return nameImage;
}
var randomImage=boss();
document.querySelectorAll("img")[0].setAttribute("src","../images/"+randomImage);

//image player 2/////////////////////////////////////////
function boss2(){
    var nameImage2=images[ Math.floor(Math.random()*images.length) ];
    return nameImage2;
}
var randomImage2=boss2();
document.querySelectorAll("img")[1].setAttribute("src","../images/"+randomImage2);
//win/////////
if(randomImage2>randomImage){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else if(randomImage2==randomImage){
    document.querySelector("h1").innerHTML="Two players are equal";
}
else{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
document.querySelector("input").setAttribute("value","Click Again");
}