var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);

}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Spag");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " current";
}

function validate() {
    var name = document.getElementById("formtext").value
    var email = document.getElementById("formemail").value
    var comment = document.getElementById("comments").value
    if (name == "" && email !== "" && comment !== "") {
        alert ("Please enter your name")
    }
    else if (name !== "" && email == "" && comment !== "") {
        alert ("Please enter your email")
    }
    else if (name !== "" && email !== "" && comment == "") {
        alert ("Please enter a comment or question.")
    }
    else if (name == "" && email == "" && comment !== "") {
        alert ("Please enter your name and email")
    }
    else if (name !== "" && email == "" && comment == "") {
        alert ("Please enter your email and any comments or questions.")
    }
    else if (name == "" && email !== "" && comment == "") {
        alert ("Please enter your name and any comments or questions.")
    }
    else if (name == "" && email == "" && comment == "") {
        alert ("Please enter your name, email, and any comments or questions.")
    }
    else {}
    
}
