document.addEventListener("DOMContentLoaded", function(){
    const start = document.getElementById("start")
    const boundary1= document.getElementById("boundary1")
    const boundary= document.getElementsByClassName("boundary")
    const end = document.getElementById("end")
    const status = document.getElementById("status")
    const el = document.getElementsByClassName("example")
    var score=0
    var loseflag= false //boolean flag to avoid multi-scoring
    var winflag= false //boolean flag to avoid multi-scoring
    var cheat=false //indicates if the player cheated

    el[0].textContent = "score = " + score //initialize score
    
    /*************************/

    //Check if mouse is coming from left side of the end to cheating!
    //The mouse is supposed to come from the left side! 
    // reference: https://stackoverflow.com/questions/15685708/determining-if-mouse-click-happened-in-left-or-right-half-of-div

    var hoverEnd= function handleMouseOverEnd(event){
        var width = end.offsetWidth;
        var xCoordInClickTarget = event.clientX - end.getBoundingClientRect().left;
        if(width / 2 > xCoordInClickTarget)
        {  
        if (status.textContent!="You Lose" && cheat==false){
            status.textContent="You Win" 
            if (winflag==false){
            score+=5
            el[0].textContent = "score = " + score}
            winflag=true}
        }
        else{
            cheat=true
        }
    }


    /*************************/

    //A function which handles a mouse over the boundaries
    var hoverWalls= function handleMouseOverWalls(){
        if  (status.textContent!="You Win"){
            for (let i = 0; i< boundary.length; i++)
            {
                boundary[i].style.backgroundColor = "red"
            }
            status.textContent="You Lose" 
            if (loseflag==false){
                score-=10
                el[0].textContent = "score = " + score}
            loseflag=true
        }
    }

    /*************************/

    //A function which handles mouse over the start button and starts the game
    var hoverStart= function handleMouseOverStart(){
        cheat=false
        loseflag= false
        winflag=false
        status.textContent='Begin by moving your mouse over the "S".'

        if (boundary[0].style.backgroundColor=="red"){
            for (let i = 0; i< boundary.length; i++){
                boundary[i].style.backgroundColor = "#eeeeee"
            }
            status.textContent='Begin by moving your mouse over the "S".'
        }

        for (let j = 0; j< boundary.length; j++){
            boundary[j].onmouseover= hoverWalls
        }

        end.addEventListener("mouseover",hoverEnd);
    }

    /*************************/


    start.onmouseover= hoverStart

    //reset the game on click on start
    start.onclick= function resetGame(){
        status.textContent='Begin by moving your mouse over the "S".'
        score=0
        el[0].textContent = "score = " + score
    }

});