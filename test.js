var indexSlider = 1 ; 
sliderShow(indexSlider);
function plusSlides(n) {
    sliderShow(indexSlider += n)
}

function sliderShow(n) {
    let i ;
    slides = document.getElementsByClassName("slider");
    console.log(indexSlider);
    if(n >slides.length){indexSlider =1;}
    if(n < 1 ) { indexSlider = slides.length}
    for (i=0;i < slides.length;i++){
        slides[i].style.display="none";
    }
    slides[indexSlider-1].style.display="block";
}

function openModal() {
    document.getElementById("showModal").style.display="block";
}

function closeModal() {
    document.getElementById("showModal").style.display="none";
}