// @ts-check
const $ = (id) => document.getElementById(id);

function setup() {
    const divMain = $("main");
    const divFarge = $("farge");
    const inpSkriv = $("skriv");
    const btnVelg = $("velg");
    btnVelg.addEventListener("click", finnFarge);

    //Finner fargen som du søker etter
    function finnFarge() {
        const valg = inpSkriv.value;
        if (valg === "rød") {
            divFarge.innerHTML = "Du valgte fargen rød - den har koden #FF0000";
            divMain.style.backgroundColor = "red";
        } else if (valg === "blå") {
            divFarge.innerHTML = "Du valgte fargen blå - den har koden #0000FF";
            divMain.style.backgroundColor = "blue";
        } else if (valg === "grønn") {
            divFarge.innerHTML = "Du valgte fargen grønn - den har koden #00FF00";
            divMain.style.backgroundColor = "green";
        } else if (valg === "gul") {
            divFarge.innerHTML = "Du valgte fargen gul - den har koden #FFFF00";
            divMain.style.backgroundColor = "yellow";
        }

    }

}