// section vente : zoom sur les produits
let zoom = document.getElementsByClassName('cards');
let tabZoom = Array.from(zoom);
tabZoom.forEach(element => {
    element.children[0].addEventListener('mouseover', () => {
        element.children[0].style = 'height:500px;width:500px';
        element.children[0].style.transition = "2s ease";
    });
    element.children[0].addEventListener('mouseout', () => {
        element.children[0].style = 'height:200px;width:250px';
        element.children[0].style.transition = "2s ease";
    });
});