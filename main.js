 
const btn1 = document.querySelector('#chosen1');
const btn2 = document.querySelector('#chosen2');
const btn3 = document.querySelector('#chosen3');
const btn4 = document.querySelector('#chosen4');
const btn5 = document.querySelector('#chosen5');
const star = document.querySelector('.page-one__circle-star');
let chosenNumber = document.querySelector('.page-two__chosen');

star.addEventListener('click',()=>{
   btn1.style = removeEventListener;
   btn2.style = removeEventListener;
   btn3.style = removeEventListener;
   btn4.style = removeEventListener;
   btn5.style = removeEventListener;
});

btn1.addEventListener('click', ()=> {
   btn1.style.backgroundColor = '#7c8798';
   btn1.style.color = 'white'
   chosenNumber.value =1;

   btn2.style = removeEventListener;
   btn3.style = removeEventListener;
   btn4.style = removeEventListener;
   btn5.style = removeEventListener;
});

btn2.addEventListener('click', ()=> {
   btn2.style.backgroundColor = '#7c8798';
   btn2.style.color = 'white'

   btn1.style = removeEventListener;
   btn3.style = removeEventListener;
   btn4.style = removeEventListener;
   btn5.style = removeEventListener;
   
   chosenNumber.value =2;
});

btn3.addEventListener('click', ()=> {
   btn3.style.backgroundColor = '#7c8798';
   btn3.style.color = 'white'

   btn1.style = removeEventListener;
   btn2.style = removeEventListener;
   btn4.style = removeEventListener;
   btn5.style = removeEventListener;
   chosenNumber.value =3;
});

btn4.addEventListener('click', ()=> {
   btn4.style.backgroundColor = '#7c8798';
   btn4.style.color = 'white'
   chosenNumber.value =4;

   btn1.style = removeEventListener;
   btn2.style = removeEventListener;
   btn3.style = removeEventListener;
   btn5.style = removeEventListener;
});

btn5.addEventListener('click', ()=> {
   btn5.style.backgroundColor = '#7c8798';
   btn5.style.color = 'white'
   chosenNumber.value =5;

   btn1.style = removeEventListener;
   btn2.style = removeEventListener;
   btn3.style = removeEventListener;
   btn4.style = removeEventListener;
});

//mostar segunta pagina
const btnSubmit = document.querySelector('.page-one__btn');
const page1 = document.querySelector('.page-one');
const page2 = document.querySelector('.page-two');

btnSubmit.addEventListener('click', ()=>{
    setTimeout(function(){
         page1.style.display = 'none';
         page2.style.display = 'flex';
      },300)
});