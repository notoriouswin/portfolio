//Essa função ira fazer com que o menu abra mostrando a lista de navegação
function menu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    const hamburger = document.getElementById("hamburger")
    hamburger.classList.toggle("hamburger-active")
}
