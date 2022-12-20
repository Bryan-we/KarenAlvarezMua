const FulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
    FulImgBox.style.display = "flex"
    fulImg.src = reference
}
function closeImg() {
    FulImgBox.style.display = "none";
}

document.querySelectorAll('.owl-carousel video').forEach(vid => {
    vid.onclick = () =>{
        document.querySelector('.ful-vid').style.display = 'flex';
        document.querySelector('.ful-vid video').src = vid.getAttribute('src');
    }
});

document.querySelector('.ful-vid span') .onclick = () =>{
    document.querySelector('.ful-vid').style.display = 'none';
}