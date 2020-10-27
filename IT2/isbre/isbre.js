// @ts-check

function setup() {
    const lydfil = document.getElementById("carsound");
    const divBre = document.getElementById("bre");
    const btnSpill = document.querySelector("button");
    btnSpill.addEventListener("click", playSound);

    function playSound() {
        divBre.classList.remove("aktiv");
        void divBre.offsetWidth;
        lydfil.play();
        divBre.classList.add("aktiv");
    }
}