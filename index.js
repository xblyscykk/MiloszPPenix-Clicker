let clicks = 0;
let multiplier = 1;






document.getElementById("button").onclick = function(){

if (clicks > 4999){

document.getElementById("endgame").innerHTML = "You beat the game!";


}
clicks+=multiplier;
document.getElementById("clicks").innerHTML = clicks;

}

document.getElementById("sp1").onclick = function(){
if (clicks < 49){

    document.getElementById("sp1txt").innerHTML = "50 clicks required!";

}
else if (clicks > 49){

    multiplier = 2;
    document.getElementById("sp1").style.display = 'none';
    document.getElementById("sp1txt").innerHTML = "";
}
}
document.getElementById("sp2").onclick = function(){
    if (clicks < 99){
    
        document.getElementById("sp2txt").innerHTML = "100 clicks required!";
    
    }
    else if (clicks > 99){
    
        multiplier = 4;
        document.getElementById("sp2").style.display = 'none';
        document.getElementById("sp2txt").innerHTML = "";
    }
    }
document.getElementById("sp3").onclick = function(){
        if (clicks < 249){
        
            document.getElementById("sp3txt").innerHTML = "250 clicks required!";
        
        }
        else if (clicks > 249){
        
            multiplier = 10;
            document.getElementById("sp3").style.display = 'none';
            document.getElementById("sp3txt").innerHTML = "";
     }
    }
document.getElementById("sp4").onclick = function(){
        if (clicks < 999){
        
            document.getElementById("sp4txt").innerHTML = "1000 clicks required!";
        
        }
        else if (clicks > 999){
        
            multiplier = 50;
            document.getElementById("sp4").style.display = 'none';
            document.getElementById("sp4txt").innerHTML = "";
     }
    }




