// @ts-check

function roll() {
    document.getElementById("terning1").src = randomNumber() + ".png";
    document.getElementById("terning2").src = randomNumber() + ".png"
}

function randomNumber() {
    return (
    Math.floor(Math.random() * 6 + 1)
    )
}