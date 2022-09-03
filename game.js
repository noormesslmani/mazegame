document.addEventListener("DOMContentLoaded", function(){
    const start = document.getElementById("start")
    const boundary1= document.getElementById("boundary1")
    const boundary= document.getElementsByClassName("boundary")
    const end = document.getElementById("end")
    const status = document.getElementById("status")
    const el = document.getElementsByClassName("example")
    var score=0
    var loseflag= false
    var winflag= false

    el[0].textContent = "score = " + score;
    /*************************/
    var hoverEnd= function handleMouseOverEnd(){
        if (status.textContent!="You Lose"){
            status.textContent="You Win" 
            if (winflag==false){
            score+=5
            el[0].textContent = "score = " + score}
            winflag=true
        }
    } 

    /*************************/

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

    var hoverStart= function handleMouseOverStart(){
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

        end.onmouseover= hoverEnd
    }

    /*************************/
    start.onmouseover= hoverStart
    start.onclick= function resetGame(){
        status.textContent='Begin by moving your mouse over the "S".'
        score=0
        el[0].textContent = "score = " + score
    }

});