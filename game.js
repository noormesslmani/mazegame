document.addEventListener("DOMContentLoaded", function(){
    const start = document.getElementById("start");
    const boundary1= document.getElementById("boundary1");
    const boundary= document.getElementsByClassName("boundary");
    const end = document.getElementById("end");
    const status = document.getElementById("status");

    


    start.onmouseover= function handleMouseOverStart(){
        status.textContent='Begin by moving your mouse over the "S".';
        if (boundary[0].style.backgroundColor=="red"){
            for (let i = 0; i< boundary.length; i++){
                boundary[i].style.backgroundColor = "#eeeeee";
            }
            status.textContent='Begin by moving your mouse over the "S".';  
        } 
        for (let j = 0; j< boundary.length; j++){
            boundary[j].onmouseover= function handleMouseOverWalls(){
                for (let i = 0; i< boundary.length; i++){
                    boundary[i].style.backgroundColor = "red";
                }
                status.textContent="You Lose"  
            }
        }
        end.onmouseover= function handleMouseOverEnd(){
            if (status.textContent!="You Lose" ){
            status.textContent="You Win" ;}
        } 
        
    };



});