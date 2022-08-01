const slides=document.querySelectorAll('.slide');
const next=document.getElementById('next');
const prev=document.getElementById('prev');
const auto=true;
const intervalTime=5000;
let sliderInterval;


const nextSlide=()=>{
    const activeSlider=document.querySelector('.active');  //aktif klasını seçiyoruz
    activeSlider.classList.remove('active'); //aktif klasını siliyoruz

    if(activeSlider.nextElementSibling){//active kalsından sonra başka bir kardeşi var mı diye kontrol ediyoruz.
        activeSlider.nextElementSibling.classList.add('active');

    }
    else{
        slides[0].classList.add('active');
    }
}

const prevSlide=function(){
    const activeSlider=document.querySelector('.active');  //aktif klasını seçiyoruz
    activeSlider.classList.remove('active'); //aktif klasını siliyoruz

    if(activeSlider.previousElementSibling){//active kalsından sonra başka bir kardeşi var mı diye kontrol ediyoruz.
        activeSlider.previousElementSibling.classList.add('active');

    }
    else{
        slides[slides.length-1].classList.add('active');
    }
}
next.addEventListener('click',()=>{
    
    nextSlide();
    if(auto){
        clearInterval(sliderInterval);
        sliderInterval=setInterval(nextSlide,intervalTime);//manuel değiştirdikten sonra süreyi sıfırlaması ve 5 saniyeden başlaması için
    }
});
prev.addEventListener('click',()=>{
    prevSlide();
    if(auto){
        clearInterval(sliderInterval);
        sliderInterval=setInterval(nextSlide,intervalTime);
    }
});

if(auto){
    sliderInterval=setInterval(nextSlide,intervalTime);//5 saniye sonra otomatik değişmesi için
}