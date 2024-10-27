

let display = document.querySelector('.display');
const btns = document.querySelectorAll('button');
const zero =document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const addy = document.querySelector('#addy');
const sub = document.querySelector('#sub');
const multo = document.querySelector('#multo');
const divon = document.querySelector('#divon');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
/*const screen = document.querySelector('.screen');*/

const machine = [];

function view (){
    display.textContent = machine.join('');
}

view();
console.log(machine);

 
 

zero.addEventListener('click', ()=> {machine.push(0); view ()} );
one.addEventListener('click',()=> {machine.push(1); view ()});
two.addEventListener('click', ()=> {machine.push(2); view ()} );
three.addEventListener('click', ()=> {machine.push(3); view ()} );
four.addEventListener('click', ()=> {machine.push(4); view ()} );
five.addEventListener('click', ()=> {machine.push(5); view ()} );
six.addEventListener('click', ()=> {machine.push(6); view ()} );
seven.addEventListener('click', ()=> {machine.push(7); view ()} );
eight.addEventListener('click', ()=> {machine.push(8); view ()} );
nine.addEventListener('click', ()=> {machine.push(9); view ()} );
sub.addEventListener('click', ()=> {power ();machine.push( '-') ; view ()} );
multo.addEventListener('click', ()=> {power ();machine.push('X'); view ()} );
divon.addEventListener('click', ()=> {power ();machine.push('/'); view ()} );
addy.addEventListener('click', ()=> {power ();machine.push('+'); view ()} );
equal.addEventListener('click',()=>{ execute () ; view ()});
clear.addEventListener('click', ()=>{whipe ();view()});

function whipe (){
    let hobo = machine.length
    for(let i=0;i < hobo; i++){
        machine.pop();
    }
};


let choice = function (element){
    if  (element == '+' ){
        return element;
    }
    else if (element == '-'){
        return element;
    }
    else if(element == '/'){
        return element;
    }
    else if(element == 'X'){
        return element;
    }
};

let outcome;



function add(alpha,bravo){
    return alpha + bravo ;
};

function subtract(Numb1,Numb2){
   return Numb1 - Numb2 ;
};

function multiply(Numb1,Numb2){
   return Numb1 * Numb2 ;
};

function divide(Numb1,Numb2){
   return Numb1 / Numb2 ;
};



let snarky = "Shit Head";


function execute(){
    
    let coby = machine.length;
    let symbAmmount = machine.filter(choice);
     let coin = symbAmmount.length;

   

     let happy = machine.findIndex(choice);
     /*let cranberry = machine.findIndex(nextChoice );*/
     let clue = machine[happy];
     let numb1 = machine.slice(0,happy).join('');
     let numb2  = machine.slice(happy +1 , coby ).join('');
     let alpha = parseInt(numb1);
     let bravo = parseInt (numb2);
     
       /*console.log(numb2);
       console.log(symbAmmount);
       console.log (coin);
       console.log(bravo);*/

     
     

       

     function operate (){
        if(clue == '+'){
           return add(alpha,bravo);
        }
        else if (clue =='-'){
            return subtract(alpha,bravo)
        }
        else if (clue == '/'){
            if (bravo === 0){
                return snarky;
            }else {return divide (alpha,bravo)}
            
        }
        else if (clue == 'X'){
            return multiply(alpha,bravo)
        };
     };
      
      outcome = operate ();
      machine.splice(0,machine.length,outcome);
      /*screen.textContent = machine;*/
      


};


function power (){
    let coby = machine.length;
    let symbAmmount = machine.filter(choice);
    let coin = symbAmmount.length;
    
    if (coin === 1){
        execute ();
    };
};
    
    












