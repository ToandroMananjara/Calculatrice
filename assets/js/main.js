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

ac.onclick=function(){
    screen.value= ' '
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
 egal.onclick=function(){
    resultat.textContent=eval(screen.value)

    
 }


mode.addEventListener('click',function(){
    boule.classList.toggle('boule-toogle')
    container.classList.toggle('container-toggle')
})

