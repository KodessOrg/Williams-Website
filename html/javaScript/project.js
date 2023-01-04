//adding eventListener
const buttonHold = document.querySelector('.homeBtn');

buttonHold.addEventListener('click',function(e){
    console.log(e);
    document.body.style.backgroundColor = 'blue';
    setTimeout(()=>{
        document.body.style.backgroundColor = '';
    },2000)
    
});