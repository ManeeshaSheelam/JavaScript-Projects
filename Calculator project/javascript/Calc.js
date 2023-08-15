const button = document.querySelectorAll("button");
const Operters = document.querySelectorAll(".operator");


    
function appendToDisplay(value) {
   const display = document.querySelector(".display");
   display.value += value;
};
function ClearResult(){
    document.querySelector(".display").value = "";
}
function deleteLast(){
  let display= document.querySelector(".display");
   display.value = display.value.slice(0,-1);
}
function calculateResult(){
   let display= document.querySelector(".display");
   display.value = eval(display.value)
}
// for (let i = 0;i<button.length; i++){
//    button.addeventListener('click',e =>console.log(e.target.display.dataset.value));
// }
// const specialOperters = ['%','*','/','-','+','='];
// let output = "";
//  // function to calculate based on button clicked
// const calculate = (btnvalue) =>{
// if(btnvalue ==='=' && output !== ""){
//   output = eval(output.replace('%','/100'))
// }else if(btnvalue==="AC"){
// output=" ";
// }else if(btnvalue==="DEL"){
//     output = output.toString().slice(0,-1)
// }else{
//     if(output === " " && specialOperters.includes(btnvalue))return;
//     output += btnvalue;
// }
// display.value = output;
// }

// // adding event listener to all buttons ,call calculate() on click
// buttons.forEach((button)=>{
//     //button click listenr calls calculate() with dataset value as argument
// button.addEventListener('click',e => console.log(e.target.display.dataset.value));
// })