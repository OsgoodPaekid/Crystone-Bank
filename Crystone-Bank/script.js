<<<<<<< HEAD
const toggle=document.querySelector('.toggle');
const bnw=document.getElementById('bnw');
const bodyEl=document.querySelector('body')

toggle.addEventListener('click', function(){
    
    toggle.classList.toggle('active');
    bodyEl.classList.toggle('active')
    let message=bnw.textContent
    if(message===`dark mode`){
        bnw.textContent=`light mode`
    } else{
        bnw.textContent=`dark mode`
    }  
=======
const toggle=document.querySelector('.toggle');
const bnw=document.getElementById('bnw');
const bodyEl=document.querySelector('body')

toggle.addEventListener('click', function(){
    
    toggle.classList.toggle('active');
    bodyEl.classList.toggle('active')
    let message=bnw.textContent
    if(message===`dark mode`){
        bnw.textContent=`light mode`
    } else{
        bnw.textContent=`dark mode`
    }  
>>>>>>> f1e725daf2fe4898d3e5ccdef7c3947f1b5112fd
})