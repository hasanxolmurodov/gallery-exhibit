var slideIndexs=1;
showSlides(slideIndexs);

function plusSlides(n){
    showSlides(slideIndexs+=n);
}

function currentSlide(n){
    showSlides(slideIndexs=n);
}

function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("myslides");
    var dots=document.getElementsByClassName("dot");
    if(n>slides.length) {slideIndexs=1}
    if(n<1) {slideIndexs=slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active", "");
    }
    slides[slideIndexs-1].style.display= "block";
    dots[slideIndexs-1].className +=" active";
}
//Auto Slide
