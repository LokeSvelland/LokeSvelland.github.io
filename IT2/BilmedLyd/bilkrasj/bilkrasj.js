//@ts-check

function setup() {
    const lydfil = document.getElementById("carsound");
    const divCar = document.getElementById("car1");
    const divCar2 = document.getElementById("car2");
    const btnSpill = document.querySelector("button");
    btnSpill.addEventListener("click", playSound);

    function playSound() {
    lydfil.play();
    divCar.classList.add("aktiv");
    divCar2.classList.add("aktiv");
    }

}