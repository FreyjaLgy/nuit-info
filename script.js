var text = [
    "Malheur ! Vous avez été kidnappé !",
    "Mais à entendre le son quasi-inexistant produit par le véhicule dans lequel vous avez été chargé, il s'agirait plutôt d'un greennapping...",
    "Au vu de l'autonomie de ce genre de véhicule, vous savez que vous en aurez pour maximum 1h30... avant le prochain plein.",
    "Comme vous allez être ici longtemps, faisons les présentations. Vous êtes Maurice, 64 ans et bourré de rhumatismes.",
    "Vous alliez tranquillement échouer à obtenir le titre de Champion du Monde de Scrabble quand ce type bizarre au crâne luisant vous a attrapé.",
    "La seule chose dont vous vous souvenez c'est de vous être réveillé dans le coffre d'une voiure électrique, ligoté de la tête aux pieds. Vous n\'allez pas rester comme ça sans rien faire !",
];
var whereText = 0;

function nextText() {
    var elementAffichage = document.getElementById("text-box");

    if (whereText < text.length) {
        elementAffichage.innerHTML = text[whereText];
        whereText++;
    } else {
        elementAffichage.innerHTML = "No more text.";
    }
}

function develop(){
    var menu = document.getElementById("menu-deroulant");
    var button = document.getElementById("round-button");
    if (menu.style.left == "0%") {
        menu.style.left = "-15%";
        button.style.left = "-25px";
    }
    else{
        menu.style.left = "0%";
        button.style.left = "10%";
    }
}