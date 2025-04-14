
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }
var randomNumber1= getRandomInt (1,7);
var img1 = document.querySelector(".img1");
if(randomNumber1==1)
{
    img1.setAttribute("src","images/dice1.png")
}
else if(randomNumber1==2)
{
    img1.setAttribute("src","images/dice2.png")
}
else if(randomNumber1==3)
{

img1.setAttribute("src","images/dice3.png")
}

else if(randomNumber1==4)
{
    img1.setAttribute("src","images/dice4.png")
}

else if(randomNumber1==5)
{
    img1.setAttribute("src","images/dice5.png")
}
else{
    img1.setAttribute("src","images/dice6.png")
}

var randomNumber2= getRandomInt (1,7);
var img2 = document.querySelector(".img2");
if(randomNumber2==1)
{
img2.setAttribute ("src","images/dice1.png");
}
else if(randomNumber2==2)
{
    img2.setAttribute ("src","images/dice2.png");
}
else if(randomNumber2==3)
{

img2.setAttribute("src","images/dice3.png")
}

else if(randomNumber2==4)
{
    img2.setAttribute ("src","images/dice4.png");
}

else if(randomNumber2==5)
{
    img2.setAttribute ("src","images/dice5.png");
}
else{
    img2.setAttribute ("src","images/dice6.png");
}

var heading = document.querySelector("h1");
if (randomNumber1>randomNumber2)
{
    heading.innerHTML = "Player 1 wins!";
}
else if(randomNumber1==randomNumber2)
{
    heading.innerHTML = "Its a Draw!";
}
else{
    heading.innerHTML = "Player 2 wins!";
}