var text = [
    "Malheur ! Vous avez été kidnappé !",
    "Mais à entendre le son quasi-inexistant produit par le véhicule dans lequel vous avez été chargé, il s'agirait plutôt d'un greennapping...",
    "Au vu de l'autonomie de ce genre de véhicule, vous savez que vous en aurez pour maximum 1h30... avant le prochain plein.",
    "Comme vous allez être ici longtemps, faisons les présentations. Vous êtes Maurice, 64 ans et bourré de rhumatismes.",
    "Vous alliez tranquillement échouer à obtenir le titre de Champion du Monde de Scrabble quand ce type bizarre au crâne luisant vous a attrapé.",
    "La seule chose dont vous vous souvenez c'est de vous être réveillé dans le coffre d'une voiure électrique, ligoté de la tête aux pieds. Vous n\'allez pas rester comme ça sans rien faire !",
    "Le coffre a l'air d'être ouvrable de l'intérieur... Que voulez-vous faire ?",
];
var whereText=0;

function get(name) {
    return document.getElementById(name);
}

function changeImage() {
    var image = get('image');
    var divBouton = get('divBouton');
    if (image.src.includes("images/LAPORTE.png")) {
        image.src = "images/LAPORTEOUVERTE.png";
        divBouton.removeAttribute("hidden");
    } else {
        image.src = "images/LAPORTE.png";
        divBouton.setAttribute("hidden", "hidden");
    }
}

function nextText() {
    var textBox = get("text-box");
    var nextButton = get("next-button");
    
    nextButton.innerHTML="Suivant";
    if (whereText==7) {
        var bouton1 = get("bouton-choix1");
        var bouton2 = get("bouton-choix2");
        var nextButton = get("next-button");
        bouton1.innerHTML = "Tirer sur vos liens";
        bouton2.innerHTML = "Attendre";
        bouton1.style.display="block";
        bouton2.style.display="block";
        nextButton.style.display="none";
    } else {
        if (whereText < text.length) {
            textBox.innerHTML = text[whereText++];
        } else {
            textBox.innerHTML = "No more text.";
        }
    }
}

function develop(){
    var menu = get("menu-deroulant");
    var button = get("round-button");
    if (menu.style.left == "0%") {
        menu.style.left = "-15%";
        button.style.left = "-3%";
    }
    else{
        menu.style.left = "0%";
        button.style.left = "12%";
    }
}

function choix1(){
    var textBox = get("text-box");
    var bouton1 = get("bouton-choix1");
    var bouton2 = get("bouton-choix2");
    var nextButton = get("next-button");
    if (whereText==7) {
        text.push("Vous commencez à tirer sur vos liens. Vous pourriez peut-être les desserrer ainsi...Mais malheureusement, vous êtes vieux.");
        text.push("Après à peu près 35 minutes à souffrir de vos rhumatismes sur un pauvre noeud d'arrêt, la voiture de votre ravisseur marque le sien. Vous entendez des pas autour du véhicule. Vous êtes arrivé.");
        text.push("Le coffre s'ouvre sur la nuit noire. Le visage de votre greennappeur éclairé par la faible lumière du coffre vous apparaît maintenant clairement. Chauve, le regard malicieux, une barbe grisonnante et des lunettes roses, vous êtes face au sosie parfait de Pascal Obispo.");
        bouton1.style.display="none";
        bouton2.style.display="none";
        nextButton.style.display="block";
        textBox.innerHTML = text[whereText++];
    }
}

function point(depth)
{
    var textBox = get("text-box");
    setTimeout(function() {
            textBox.innerHTML+=".";
            if(depth > 0) point(depth-1);
        }, 1000);
}

function choix2(){
    var textBox = get("text-box");
    var bouton1 = get("bouton-choix1");
    var bouton2 = get("bouton-choix2");
    var nextButton = get("next-button");
    
    if (whereText==7) {
        bouton1.style.display="none";
        bouton2.style.display="none";
        nextButton.innerHTML="Arrêter d'attendre";
        nextButton.style.display="block";
        textBox.innerHTML="Vous attendez";
        point(2);
        whereText=6;
        setTimeout(function() {
            textBox.innerHTML="Vous comprenez bien que ça ne servira à rien, pas vrai ?";
        }, 90000);
    }
}