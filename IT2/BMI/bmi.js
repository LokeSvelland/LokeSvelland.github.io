// @ts-check

window.onload = function() {
    const divMain = document.getElementById("main");
    const divS = document.getElementById("s");
    const inpVekt = (document.getElementById("vekt"));
    const btnberegn = document.getElementById("beregn");
    btnberegn.addEventListener("click", beregnVansker);

    function beregnVansker() {
        // @ts-ignore
        divS.className = "soyle";
        const vekt = inpVekt.value;
        if (vekt < 0 || vekt > 250) {
            alert("Skriv en rimelig vekt!");
            return;
        }
        if (vekt < 8) {
            divS.innerHTML = "lett";
            divS.classList.add("lett");
        } else if(vekt < 16) {
            divS.innerHTML = "middels";
            divS.classList.add("middels");
        } else {
            divS.innerHTML = "tung";
            divS.classList.add("tung");
        }
    }
    
}