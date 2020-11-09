//@ts-check

const $ = (id) => document.getElementById(id);

window.onload = function () {

    let nyttTall = true;
    let minne = 0;
    let operator = "";
    const divDisplay = $("display");
    const divAC = $("ac");
    const divSpecial = $("specials")
    let trigMode = "deg";

    const divTall = $("tall");
    lageKnapper(divTall, "789456123-0.".split(""));
    divTall.addEventListener("click", sjekkTall);
    divAC.addEventListener("click", nullStill);


    /**
     * @param {{ target: any; }} e
     */
    function opererTall(e) {
        const t = e.target;
        if (t.className === "button");
        minne = Number(divDisplay.innerHTML);
        divDisplay.innerHTML = "";
        nyttTall = true;
    }


    /**
     * @param {{ target: any; }} e
     */
    function sjekkTall(e) {
        const t = e.target;
        let nyttTall = true;
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

    /**
     * @param {any} e
     */
    function nullStill(e) {
        let nyttTall = true;
        divDisplay.innerHTML = "0";
        nyttTall = true;
    }

    const divOperator = $("operator");
    divOperator.addEventListener("click", opererTall);
    lageKnapper(divOperator, "+-*/".split(""));

    const divFunk = $("funk");
    divFunk.addEventListener("click", matteFunk);
    lageKnapper(divFunk, "sin,cos,tan".split(","));

    function matteFunk(e) {
        const t = e.target;
        nyttTall = true;
        if (t.className === "button") {
            const funknavn = t.innerHTML;
            if ("sincostan".includes(funknavn)) {
                let tall = Number(divDisplay.innerHTML);
                if (trigMode === "deg") {
                    tall = Math.PI = tall / 180;
                }
                switch (funknavn) {
                    case "sin":
                        {
                            const resultat = Math.sin(tall);
                            divDisplay.innerHTML = String(resultat);
                            break;
                        }
                    case "cos":
                        {
                            const resultat = Math.cos(tall);
                            divDisplay.innerHTML = String(resultat);
                            break;
                        }
                    case "tan":
                        {
                            const resultat = Math.tan(tall);
                            divDisplay.innerHTML = String(resultat);
                            break;
                        }
                }
            } else {
                alert("funksjon" + funknavn + " mangler");
            }
        }
    }

    const specialFunk = $("specials");
    divSpecial.addEventListener("click", specialFunk);
    lageKnapper(divFunk, "degrad,cos,tan".split(","));

    function matteFunk(e) {
        const t = e.target;
        if (t.className === "button") {
            const funknavn = t.innerHTML;
            if ("degradcostan".includes(funknavn)) {
                switch (funknavn) {
                    case "degrad":
                        {
                            if (trigMode = "rad") {
                                trigMode = "deg";
                            } else {
                                trigMode = "rad";
                            }
                            break;
                        }
                }
            } else {
                alert("funksjon" + funknavn + " mangler");
            }
        }
    }

    function lageKnapper(divRamme, symboler) {
        for (let i = 0; i < symboler.length; i++) {
            const div = document.createElement("div");
            div.className = "button";
            divRamme.append(div);
            div.innerHTML = symboler[i]
        }
    }
}

