// 2 nova implementação 
const logo = document.querySelector('.img-responsive');
console.log(logo);
logo.onclick = function () {
    this.style.transform = "scale(1.5)";
    window.location.href = "/";
};


const card= document.querySelectorAll('.card .card-img-top');
// console.log(card);
card.forEach((imagem) => {

imagem.onclick = function () {
    this.style.transform = "scale(1.2)";
    window.location.href = "/restaurants";
}

imagem.onmouseover = function () {
    this.style.transform = 'rotate(5deg)';
}

imagem.onmouseout = function () {
    this.style.transform = 'rotate(360deg)';
}

});