let mode = document.getElementById('mode')
let boule=document.getElementById('boule')
let container = document.getElementById('container')
let screen = document.getElementById('screen')
let zero = document.getElementById('zero')
let un = document.getElementById('un')
let deux = document.getElementById('deux')
let trois = document.getElementById('trois')
let quatre = document.getElementById('quatre')
let cinq = document.getElementById('cinq')
let six = document.getElementById('six')
let sept= document.getElementById('sept')
let huit = document.getElementById('huit')
let neuf = document.getElementById('neuf')
let plus = document.getElementById('plus')
let moins = document.getElementById('moins')
let fois = document.getElementById('fois')
let division = document.getElementById('division')
let egal = document.getElementById('egal')
let ac = document.getElementById('ac')
let virgule = document.getElementById('virgule')
let pourcent = document.getElementById('pourcent')
let resultat = document.getElementById('result')

let inverse = document.getElementById('plus-ou-moins')

ac.onclick=function(){
    screen.value= ''
    resultat.textContent=''
 }
 pourcent.onclick=function(){

 }
un.onclick=function(){
    screen.value+= '1'
 }

 deux.onclick=function(){
    screen.value+='2'
 }

 trois.onclick=function(){
    screen.value+='3'
 }

 quatre.onclick=function(){
    screen.value+='4'
 }

 cinq.onclick=function(){
    screen.value+='5'
 }

 six.onclick=function(){
    screen.value+='6'
 }

 sept.onclick=function(){
    screen.value+='7'
 }
 huit.onclick=function(){
    screen.value+='8'
 }
 neuf.onclick=function(){
    screen.value+='9'
 }
 zero.onclick=function(){
    screen.value+='0'
 }
 plus.onclick=function(){
    screen.value+='+'
 }
 moins.onclick=function(){
    screen.value+='-'
 }
 fois.onclick=function(){
    screen.value+='*'
 }
 division.onclick=function(){
    screen.value+='/'
 }
 virgule.onclick=function(){
    screen.value+='.'
 }

 const testBeforCalcul = (value, operating) => {
   if(value[0] === '/' || value[0] === '*'){
      console.log('synthaxe error');
      return false
   }
   else{
      for (let index = 0; index < operating.length; index++) {
         if(value[value.length - 1] === operating[index]){
            console.log('synthaxe error 2');
            return false
         }
      } 
      for (let index = 0; index < value.length - 1; index++) {
         console.log('boucle en marche');
         for (let j = 0; j < operating.length; j++) {
            for (let k = 0; k < operating.length; k++) {
               if(value[index] === operating[j] && value[index + 1] === operating[k]){
                  console.log('synthaxe error 3');
                  return false
               }
            }  
         }
      }
   }
 }
 const operating = ['/', '*', '-', '+'] 

 egal.onclick=function(){
    let screenValue = screen.value;
    let calculFound = testBeforCalcul(screenValue, operating)
         console.log('Calcul found', calculFound);
         if(calculFound === false){
            console.log("synthaxe error");
         }          
         else{
            console.log(screen.value);
            resultat.textContent= eval(screen.value)
         }
 }

mode.addEventListener('click',function(){
    boule.classList.toggle('boule-toogle')
    container.classList.toggle('container-toggle')
})

