var p1n ;
var p2n ;
function LogIn(){
    p1n = document.getElementById("player1N").value;
    p2n = document.getElementById("player2N").value;
    localStorage.setItem("p1n",p1n);
    localStorage.setItem("p2n",p2n);
    window.location = "game.html";
}