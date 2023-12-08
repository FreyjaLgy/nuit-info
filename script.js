var text = [
    "Malheur ! Vous avez été kidnappé !",
    "Mais à entendre le son quasi-inexistant produit par le véhicule dans lequel vous avez été chargé, il s'agirait plutôt d'un greennapping...",
    "Au vu de l'autonomie de ce genre de véhicule, vous savez que vous en aurez pour maximum 1h30... avant le prochain plein.",
    "Comme vous allez être ici longtemps, faisons les présentations. Vous êtes Maurice, 64 ans et bourré de rhumatismes.",
    "Vous alliez tranquillement échouer à obtenir le titre de Champion du Monde de Scrabble quand ce type bizarre au crâne luisant vous a attrapé.",
    "La seule chose dont vous vous souvenez c'est de vous être réveillé dans le coffre d'une voiure électrique, ligoté de la tête aux pieds. Vous n\'allez pas rester comme ça sans rien faire !",
    "Le coffre a l'air d'être ouvrable de l'intérieur... Que voulez-vous faire ?",
    "Vous commencez à tirer sur vos liens. Vous pourriez peut-être les desserrer ainsi...Mais malheureusement, vous êtes vieux.",
    "Après à peu près 35 minutes à souffrir de vos rhumatismes sur un pauvre noeud d'arrêt, la voiture de votre ravisseur marque le sien. Vous entendez des pas autour du véhicule. Vous êtes arrivé.",
    "Le coffre s'ouvre sur la nuit noire. Le visage de votre greennappeur éclairé par la faible lumière du coffre vous apparaît maintenant clairement. Chauve, le regard malicieux, une barbe grisonnante et des lunettes roses, vous êtes face au sosie parfait de Pascal Obispo.",
    "Il vous soulève sans problème (il est très musclé), et entre dans un bunker souterrain.",
    "Il parcourt un dédale de couloirs incompréhensible et vous jette avec une forme surhumaine dans une pièce sombre qu'il referme sur vous. Ses pas s'éloignent peu à peu...",
    "Que voulez-vous faire ?",
    "Vous cherchez dans la pièce à la recherche d'un moyen d'en sortir.",
    "Vous trouvez une inscription sur un mur :\n\"Le dérèglement climatique n'est pas une affaire si urgente.\"",
    "Qu'est-ce que c'est que ce truc ? Le précédent otage était-il devenu fou avant de finir en saucisse ?",
    "Vous regardez autour de vous. La pièce comporte trois issues. L'une d'entre elle est celle par laquelle vous êtes entré, et elle est verrouillée. Quant aux deux autres... elles n'en ont pas l'air... Vous remarquez d'autres inscriptions dessus...",
    "Quelle porte choisissez-vous ? (\"Le dérèglement climatique n'est pas une affaire si urgente.\")",

];
var whereText=0;
var clicPorte=0;

function get(name) {
    return document.getElementById(name);
}

function point(depth)
{
    var textBox = get("text-box");
    setTimeout(function() {
            textBox.innerHTML+=".";
            if(depth > 0) point(depth-1);
        }, 1000);
}

function changeImage() {
    var image = get('image');
    clicPorte++;
    var divBouton = get('divBouton');
    if (image.src.includes("images/LAPORTE.png")) {
        image.src = "images/LAPORTEOUVERTE.png";
        divBouton.removeAttribute("hidden");
    } else {
        image.src = "images/LAPORTE.png";
        divBouton.setAttribute("hidden", "hidden");
    }
    if (clicPorte == 20) {
        alert("A votre âge, le temps est précieux. Ne le gâchez pas à faire des choses inutiles.\nIl est souvent plus facile de baisser les bras face à une échéance qui se rapproche, mais ce n'est pas la solution. \nVous devez vous BATTRE. Vous devez survivre. \nC\'est comme pour le climat, au fait. Il n'est pas trop tard. Mais il n'est pas trop tôt non plus. \nPour réessayer, actualisez la page.")
    }
}

function nextText() {
    var textBox = get("text-box");
    var nextButton = get("next-button");
    
    nextButton.innerHTML="Suivant";
    if (whereText==7) {
        choix1();
    } else if(whereText==13) {
        choix2();
    } /*else if(whereText==18) {
        choix3();
    } */
    else {
        if (whereText < text.length) {
            textBox.innerHTML = text[whereText++];
        } else {
            textBox.innerHTML = "No more text.";
            get('divPorte').removeAttribute("hidden");
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

function choix1() {
    var bouton1 = get("bouton-choix1");
    var bouton2 = get("bouton-choix2");
    var nextButton = get("next-button");
    bouton1.innerHTML = "Tirer sur vos liens";
    bouton2.innerHTML = "Attendre";
    bouton1.style.display="block";
    bouton2.style.display="block";
    nextButton.style.display="none";
}

function choix1_1(){
    var textBox = get("text-box");
    var bouton1 = get("bouton-choix1");
    var bouton2 = get("bouton-choix2");
    var nextButton = get("next-button");
    bouton1.style.display="none";
    bouton2.style.display="none";
    nextButton.style.display="block";
    textBox.innerHTML = text[whereText++];
}

function choix1_2(){
    var textBox = get("text-box");
    var bouton1 = get("bouton-choix1");
    var bouton2 = get("bouton-choix2");
    var nextButton = get("next-button");
    bouton1.style.display="none";
    bouton2.style.display="none";
    nextButton.innerHTML="Arrêter d'attendre";
    nextButton.style.display="block";
    textBox.innerHTML="Vous attendez";
    point(2);
    whereText--;
    setTimeout(function() {
        textBox.innerHTML="Vous comprenez bien que ça ne servira à rien, pas vrai ?";
    }, 90000);
}




function choix2()
{
    var bouton1 = get("bouton-choix1");
    var bouton2 = get("bouton-choix2");
    var nextButton = get("next-button");
    bouton1.innerHTML = "Attendre";
    bouton2.innerHTML = "Chercher un moyen de sortir";
    bouton1.style.display="block";
    bouton2.style.display="block";
    nextButton.style.display="none";
    bouton1.onclick = choix2_1;
    bouton2.onclick = choix2_2;
}

function choix2_1() {
    var textBox = get("text-box");
    var bouton1 = get("bouton-choix1");
    var bouton2 = get("bouton-choix2");
    var nextButton = get("next-button");
    bouton1.style.display="none";
    bouton2.style.display="none";
    nextButton.innerHTML="Arrêter d'attendre";
    nextButton.style.display="block";
    textBox.innerHTML="Vous attendez";
    point(2);
    whereText--;
    setTimeout(function() {
        alert("Vous êtes mort de viellesse...")
    }, 900000);
}

function choix2_2() {
    var textBox = get("text-box");
    var bouton1 = get("bouton-choix1");
    var bouton2 = get("bouton-choix2");
    var nextButton = get("next-button");
    bouton1.style.display="none";
    bouton2.style.display="none";
    nextButton.style.display="block";
    textBox.innerHTML = text[whereText++];
}

function choix3() {
    // body...
}