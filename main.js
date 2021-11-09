function openNav() {
    document.getElementById("dropMenu").style.width="50%";
    document.getElementById("hidecontainer").style.zIndex="1";

}

function closeNav(){
    document.getElementById("dropMenu").style.width="0";
    document.getElementById("hidecontainer").style.zIndex="2";
}



var indexSlider = 1 ; 
sliderShow(indexSlider);
function plusSlides(n) {
    sliderShow(indexSlider += n)
}
function working() {
    console.log('working')
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

function closeModal() {
    document.getElementById("showModal").style.display="none";
    document.getElementById("hidecontainer").style.display="block";
}

document.getElementById("openModal").addEventListener('click',()=>{
    document.getElementById("showModal").style.display="block";
    document.getElementById("hidecontainer").style.display="none";
})
