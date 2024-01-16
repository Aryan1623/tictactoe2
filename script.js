let buttons = document.querySelectorAll(".button");
let newbuttons = document.querySelector(".newbutton");
let newbuttons2 = document.querySelector(".newbutton2");

let arr = [ [0,1,2] , [0,3,6] , [0,4,8] , [1,4,7] , [2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let m = 0;
buttons.forEach((button) => {
    button.addEventListener("click",() =>{
     if(m===0){
        button.innerText = "X";
        m=1;
     }
     else{
        button.innerText = "O";
        m=0;
     }
     button.disabled = true;
     checkwinner();
    });
});
  
   

buttons.forEach((button) => {
    newbuttons.addEventListener("click",()=>{
       button.innerText = " ";
       button.disabled = false;
    });

});
buttons.forEach((button) => {
   newbuttons2.addEventListener("click",()=>{
      button.innerText = " ";
      button.disabled = false;
   });

});
let flag = 0;
let winner2 = document.querySelector(".win");
let winner3 = document.querySelector(".winner");
const checkwinner = (button) => {
    for(let i of arr){
       if(buttons[i[0]].innerText != ""&&buttons[i[1]].innerText != ""&&buttons[i[2]].innerText != ""){
         if(buttons[i[1]].innerText == buttons[i[0]].innerText && buttons[i[1]].innerText == buttons[i[2]].innerText){
          let winner = buttons[i[1]].innerText;
          alert("The winner is "+winner) ;
           winner2.innerText="Congratulations the winner is player "+winner;
           winner3.classList.remove("hidden2");
           
         }
         
          
        
         
       }
    }
    
   
}