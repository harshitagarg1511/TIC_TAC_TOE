let boxes=document.querySelectorAll(".box");
let h2 =document.querySelector("h2");
console.log(boxes);
let player0=true;

let winnerPattern=[
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6]
];

boxes.forEach((anybox)=>{
    anybox.addEventListener("click",()=>{
        console.log("box was clicked");
        if(player0 ){
            anybox.innerHTML="O";
             player0=false;
           
        }
        else{
            anybox.innerHTML="X";
            player0=true;
        }
anybox.disabled=true;
checkWinner();
    })
})


 const checkWinner=() => {
    for(element of winnerPattern){
        let pos1val = boxes[element[0]].innerText;
        let pos2val = boxes[element[1]].innerText;
        let pos3val = boxes[element[2]].innerText;
        if(pos1val !=" " && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner");
                  h2.innerText="The Player with "+pos1val+" wins";
                  for(box of boxes){
                    box.disabled=true;
                  }
                return;
            }
        }
    }
 }


 














