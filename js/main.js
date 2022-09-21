var slideIndex = 1;

//move to next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//make dots clickable
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){

    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");

    //resets to begining
    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    //hides the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //show first block
    slides[slideIndex-1].style.display = "block";


    //changes the dots
    for (i = 0;i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    //show dot status
    dots[slideIndex-1].className += " active";

}

showSlides(slideIndex);