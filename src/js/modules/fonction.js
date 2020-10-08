/* CHANGE COLOR */
/* CHANGE COLOR */

let body = document.querySelectorAll('body')[0];
let colorW = document.querySelector('#color1');
let colorB = document.querySelector('#color2');
let p = document.querySelectorAll('header')[0];
let nav = document.querySelectorAll('a');
let logo = document.querySelector('.logo');

console.log(nav);

colorB.addEventListener("click", () => {
    body.style = "background-color: black";
    nav.style = "color: red";
});

colorW.addEventListener("click", () => {
    body.style = "background-color: white";
});

/* CHANGE COLOR */
/* CHANGE COLOR */

/* ZOOM FOTO */
/* ZOOM FOTO */
let zoom = document.getElementsByClassName('cards');
let tabZoom = Array.from(zoom);
tabZoom.forEach(element => {
    element.children[0].addEventListener('mouseover', () => {
        element.children[0].style = 'height:400px;width:400px';
        element.children[0].style.transition = "1.5s ease";
    });
    element.children[0].addEventListener('mouseout', () => {
        element.children[0].style = 'height:200px;width:250px';
        element.children[0].style.transition = "1s ease";
    });
});
/* ZOOM FOTO */
/* ZOOM FOTO */



/* MODAL */
/* MODAL */

/* bouton */
let btnModal = document.querySelector("#modalBtn");
/* carré / onglet */
let modalCarré = document.querySelector(".modall-carré");
let modalCarré2 = document.querySelector(".modall-carré2");

/* X */
let modalClose = document.querySelector(".modalClose");
let modalClose2 = document.querySelector(".modalClose2");

/* dans modal pour passer de inscription a connection */
let btnInscription = document.querySelector("#inscription");
let btnConnexion = document.querySelector("#connexionM");


/* button inscription et connection */
let btnCo = document.querySelector("#btnCo");
let btnIn = document.querySelector("#btnCreer");


/* quand tu appuis sur connection l'onglet s'affiche */
btnModal.addEventListener("click", () => {
    modalCarré.classList.add("carré-active");
});

/* quand tu click sur X l'onglet disparait */
modalClose.addEventListener("click", () => {
    modalCarré.classList.remove("carré-active");
});

/* passer a l'onglet inscription */
btnInscription.addEventListener("click", () => {
    modalCarré.classList.remove("carré-active");
    modalCarré2.classList.add("carré2-active");
});

/* quand tu click sur X l'onglet disparait */
modalClose2.addEventListener("click", () => { 
    modalCarré2.classList.remove("carré2-active");
});

/* passer a l'onglet connection */
btnConnexion.addEventListener("click", () => {
    modalCarré2.classList.remove("carré2-active"); 
    modalCarré.classList.add("carré-active");
});

/* form remplis  */

btnCo.addEventListener("click", () => {
    modalCarré.classList.remove("carré-active");
    alert("Vous etes connecté");
});

btnIn.addEventListener("click", () => {
    modalCarré2.classList.remove("carré2-active");
    alert("Vous etes inscrit");
});
/* MODAL */
/* MODAL */

 
/* MEDIA QUERIES NAV */


