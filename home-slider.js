const imgslide = document.querySelectorAll('.home-slides'), dot = document.querySelectorAll('.dot');

var slideIndex = 0;

let count = 1;
slidefun(count);

let timer = setInterval(autoslide, 4000);

function autoslide() {
    counter += 1;
    slidefun(count);
}

function plusSlides(n) {
    count += n;
    slidefun(count);
    resetTimer();
}

function currentSlide(n){
    count += n;
    slidefun(count);
    resetTimer();
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 4000);
}

function slidefun(n) {
    let i
    for(i = 0; i < imgslide.length; i++) {
        imgslide[i].style.display = "none";
    }
    for(i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    if(n > imgslide.length){
        count = 1;
    }
    if(n < 1){
        count = imgslide.length;
    }
    imgslide[count - 1].style.display = "block";
    dot[count - 1].classList.add('active');
}
