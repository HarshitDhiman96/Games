let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");


let turnO = true;

const winpatterns = [              //winpatterns
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetgame = () =>{          //resetgame function
     turnO = true;
     enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText ="O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;

        checkwinner()
    });
});




const disableBoxes = () => {          
for(box of boxes){
    box.disabled =true;
}
}  
const enableBoxes = () => {
for(box of boxes){
    box.disabled =false;
    box.innerText="";
}
}  


 const showwinner= (Winner) => {
msg.innerText = `Winner Is ${Winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
}
const checkwinner  =  () => {
       for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!=""  && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
              showwinner(pos1val);
            }
        }
       }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);