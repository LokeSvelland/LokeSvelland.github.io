//@ts-check

function setup() {
    let terning = 1;
    let btnroll = document.getElementById("roll")
    alert("hei")

    btnroll.addEventListener("click", rollDice)

    function rollDice() {
        terning = Math.trunc(Math.random()) * 6;
        console.log(terning);
        divSpill.innerHTML = terning;
    }
}