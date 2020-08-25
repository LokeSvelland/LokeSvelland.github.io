// @ts-check

function setup() {
    let t1 = document.getElementById("t1"). src = randomnumber() + (".png");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    let t4 = document.getElementById("t4");
    let t5 = document.getElementById("t5");

    // let divKnapper = document.getElementById("knapper");
    // let divMeldinger = document.getElementById("meldinger");
    let btnRoll = document.getElementById("roll");

    btnRoll.addEventListener("click", rullTerning);

    function rullTerning() {
        let terning = Math.trunc(Math.random() * 6 + 1);
        t1.innerHTML = String(terning);

        terning = Math.trunc(Math.random() * 6 + 1);
        t2.innerHTML = String(terning);
        
        terning = Math.trunc(Math.random() * 6 + 1);
        t3.innerHTML = String(terning);
        
        terning = Math.trunc(Math.random() * 6 + 1);
        t4.innerHTML = String(terning);
        
        terning = Math.trunc(Math.random() * 6 + 1);
        t5.innerHTML = String(terning);
    }
}