//@ts-check

const $ = (id) => document.getElementById(id);

window.onload = function () {
    let nyttTall = true;
    let minne = 0;
    let operator = "";

    const divDisplay = $("display");
    const divAC = $("ac");

    const divTall = $("tall");
    lageKnapper(divTall, "789456123-0.".split(""));
    divTall.addEventListener("click", sjekkTall);
    divAC.addEventListener("click", nullStill);
    divOperator.addEventListener("click", opererTall);

    function opererTall() {
        const t = e.target;
        if (t.className === "button");
        minne = Number(divDisplay.innerHTML);
        divDisplay.innerHTML = "";
        nyttTall = true;
    }
}

function sjekkTall(e) {
    const t = e.target;
    if (t.className === "button") {
        if (nyttTall) {
            minne = Number(divDisplay.innerHTML);
            divDisplay.innerHTML = "";
        }
        nyttTall = false;
        const verdi = t.innerHTML;
        divDisplay.innerHTML += verdi;
    }
}

function nullStill(e) {
    divDisplay.innerHTML = "0";
    nyttTall = true;
}

const divOperator = $("operator");
lageKnapper(divOperator, "+-*/".split(""));

const divFunk = $("funk");
lageKnapper(divFunk, "sin,cos,tan".split(","));

function lageKnapper(divRamme, symboler) {
    for (let i = 0; i < symboler.length; i++) {
        const div = document.createElement("div");
        div.className = "button";
        divRamme.append(div);
        div.innerHTML = symboler[i]
    }
}
