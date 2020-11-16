//@ts-check

let timer;
const JR = 6371000;   //jord-radius


class Rocket {
    x = 300;
    y = JR;
    vx = 0;
    vy = 2;
    ax = 0;
    ay = 2;
    drivstoff = 10;
    masse = 1;
    constructor(div) {
        this.div = div;
    }
    render() {
        const { div, x, y } = this;
        div.style.bottom = `${y - JR}px`;
        div.style.left = `${x}px`;
    }
    move() {
        let { ax, ay } = this;
        this.vx += ax;
        this.vy += ay;
        this.x += this.vx;
        this.y += this.vy;
        this.drivstoff -= 1;
        if (this.drivstoff < 1) {
            this.ay = -1;
        }
        if (this.y < JR) {
            if (Math.abs(this.vy) < 1) {
                alert("landing");
            } else {
                alert("Crash!");
            }
            clearInterval(timer);
        }
    }
}


window.onload = function () {
    const rakett = new Rocket(document.getElementById("rocket"));
    const btnStart = document.getElementById("start");
    const divTanker = document.getElementById("tanker");

    btnStart.addEventListener("click", startrakett);
    function startTanker() {
        divTanker.classList.remove("aktiv");
        void divTanker.offsetWidth;
        divTanker.classList.add("aktiv");
    }

    function startrakett() {
        startTanker()
        setTimeout(  () => {
            rakett.drivstoff = 10;
            timer = setInterval(() => {
                rakett.move();
                rakett.render()
            }, 200);
        }, 6000);
    }
}