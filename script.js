var text = ["Malheur ! Vous avez été kidnappé ! \n Mais au vu du son quasi-inexistant produit par le véhicule dans lequel vous avez été chargé,il s'agirait plutôt d'un greennapping... \n Au vu de l'autonomie de ce genre de véhicule, vous savez que vous en aurez pour maximum 1h30... avant le prochain plein."
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
    var element = document.getElementById("left-menu");

    element.style = "bold";
}