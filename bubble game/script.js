let score=0;
let timer = 10;
let ranhit=0



function bubbleform() {
    let clutter = ""

    for (let i = 1; i <= 184; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector(".pbottom").innerHTML = clutter;
}

function hitval() {
    ranhit=Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML=ranhit
}

function scorenumber(){
score +=10;
document.querySelector("#scoreval").textContent=score
}


function runtimer() {
    let timerini=setInterval( function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer
        }else{
            clearTimeout(timerini)
            document.querySelector("#pbtn").innerHTML=`<h1>Game Over </h1><h1>Score:${score}</h1>`
        }
}, 1000)
}

function maingame(){
    document.querySelector("#pbtn").addEventListener("click",function(dets){
        let clickednumber=(Number(dets.target.textContent))
        if(clickednumber===ranhit){
            scorenumber()
            hitval()
            bubbleform()
        }
    })
}



bubbleform()
hitval()
runtimer()
maingame()