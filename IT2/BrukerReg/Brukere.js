//@ts-check

function setup() {
    if (confirm("Vil du slette alle brukere?")) {
        localStorage.clear();
        }
    const skjema = document.getElementById("skjema");
    const user = { fornavn: "", etternavn: "", brukernavn: "",epost: "", telefon: "", Adresse: ""};
    //@ts-ignore
    skjema.info = user;

    const divBrukere = document.getElementById("brukere");


    skjema.addEventListener("useraccount", e => {
        //@ts-ignore
        if (e.detail === "ok") {
            //@ts-ignore
            const { fornavn, etternavn, brukernavn, epost, telefon, Adresse } = skjema.info;
            if (brukernavn !== "") {
                localStorage.setItem(brukernavn, `Brukernavn: ${brukernavn} <br> Fornavn: ${fornavn} <br> Etternavn: ${etternavn} <br> Epost: ${epost} <br> Telefon: ${telefon} <br> Adresse: ${Adresse} <br>`);
                showUsers();
            }
        }
    })

    function showUsers() {
        for (let i = 0; i < localStorage.length; i++) {
            let bruker = document.createElement("div");
            bruker.innerHTML += localStorage.getItem(localStorage.key(i));
            divBrukere.append(bruker);
        }
    }
    showUsers();
}