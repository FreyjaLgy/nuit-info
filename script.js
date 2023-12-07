var text = ["Malheur ! Vous avez été kidnappé ! \n Mais  à entendre le son quasi-inexistant produit par le véhicule dans lequel vous avez été chargé,il s'agirait plutôt d'un greennapping... \n Au vu de l'autonomie de ce genre de véhicule, vous savez que vous en aurez pour maximum 1h30... avant le prochain plein."
, "Text 1", "Text 2", "Text 3", "Text 4"];
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