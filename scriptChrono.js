let chronometre;
let tempsDebut;
let enCours = false;

function demarrerChronometre() {
    if (!enCours) {
        enCours = true;
        tempsDebut = new Date().getTime();
        chronometre = setInterval(actualiserChronometre, 10);
    }
}

function actualiserChronometre() {
    let tempsActuel = new Date().getTime();
    let tempsPasse = tempsActuel - tempsDebut;

    let minutes = Math.floor(tempsPasse / (60 * 1000));
    let secondes = Math.floor((tempsPasse % (60 * 1000)) / 1000);
    let millisecondes = tempsPasse % 1000;

    printdocument.getElementById("minutes").innerText = padZero(minutes);
    document.getElementById("secondes").innerText = padZero(secondes);
    document.getElementById("millisecondes").innerText = padZero(millisecondes);
}

function arreterChronometre() {
    clearInterval(chronometre);
    enCours = false;
    document.write(chronometre);
}

function reinitialiserChronometre() {
    clearInterval(chronometre);
    enCours = false;
    document.getElementById("minutes").innerText = "00";
    document.getElementById("secondes").innerText = "00";
    document.getElementById("millisecondes").innerText = "000";
}

function padZero(nombre) {
    return nombre < 10 ? "0" + nombre : nombre;
}
