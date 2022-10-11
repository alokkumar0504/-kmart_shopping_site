const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// java script code for sproduct html
const MainImg=document.getElementById("mainImg");
const SmallImg=document.getElementsByClassName("small-img")

SmallImg[0].onclick=function(){
    MainImg.src=SmallImg[0].src;
}
SmallImg[1].onclick=function(){
    MainImg.src=SmallImg[1].src;
}
SmallImg[2].onclick=function(){
    MainImg.src=SmallImg[2].src;
}
SmallImg[3].onclick=function(){
    MainImg.src=SmallImg[3].src;
}