//@ts-check

const dataOversikt = [
    ["Kvadrat", 10, 10, 10, 0, 100],
    ["Rektangel", 20, 20, 5, 0, 100],
    ["Parallellogram", 20, 20, 10, 2, 200],
    ["Trapes", 10, 10, 5, 2, 75],
    ["Trapes", 5, 3, 10, 5, 40]
]

function setup() {
    const divOversikt = document.getElementById("oversikt");
    const div = document.createElement("div");
    const btnLagre = document.getElementById("lagre")
    div.innerHTML = `
    <div>Type firkant</div>
    <div>Bunnlinje</div>
    <div>Topplinje</div>
    <div>Høyde</div>
    <div>Forskyvning</div>
    <div>Areal</div>`;

    divOversikt.append(div);
    for (let i = 0; i < dataOversikt.length; i++) {
        const rad = dataOversikt[i];
        const ramme = document.createElement("div");
        divOversikt.append(ramme);
        for (let j = 0; j < rad.length; j++) {
            const element = rad[j];
            const div = document.createElement("div");
            ramme.append(div);
            div.innerHTML = String(element);
        }
    }



}