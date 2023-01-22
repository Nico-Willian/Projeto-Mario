/*

1- quando clicar no botao ver trailer, abrir modal com video do trailer.
2- quando aperta no X fechar o video do trailer.

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const xModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");

botaoTrailer.addEventListener("click", ()=>{
    modal.classList.add("aberto");
    video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk");
});

xModal.addEventListener("click",()=>{
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});


