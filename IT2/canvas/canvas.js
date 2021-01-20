//@ts-check

const π = Math.PI;   // kjekk å ha

/**
 * beregner avstand mellom to punkt a og b
 * @param {{ x: number; y: number; }} a
 * @param {{ x: number; y: number; }} b
 */
function dist(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{ x: any; y: any; }} p1
 * @param {{ x: any; y: any; }} p2
 */
function firkant(ctx.p1.p2) {
    const w = p2.x-p1.x
    const h = p2.y-p1.y
    ctx.beginPath();
    ctx.rect(p1.x, p1.y, w, h);
    //ctx.stroke();
    //tegner rektangel 
}




function setup() {
    const canvas = /**@type {HTMLCanvasElement} */ (document.getElementById("tegning"));
    const ctx = canvas.getContext('2d');
    // kobling til tegnings-kontekst for canvas ctx = context
    const selType = document.getElementById("type");
    

    canvas.addEventListener("click", registrerPunkt); 
    addEventListener("topunkt", tegn);

    function tegn() {

    }

    const antallPunkt = 0;

    const p = {};

    /**
     * @param {MouseEvent} e
     */
    function registrerPunkt(e) {
        const {offsetX,offsetY} = e;
        p.x = offsetX;
        p.y = offsetY;
        antallPunkt++;
        if (antallPunkt === 2) {
            const event = new Event(`topunkt`);
            dispatchEvent(event);
        }
    }

    

    const p1 = {x:100+10,y:100+10}
    const p2 = {x:100+40,y:100+50}
    const radius = dist(p1,p2);

    firkant(ctx,p1,p2);

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 300);
    ctx.lineTo(300, 300);
    ctx.closePath();
    ctx.stroke();
    //tegner triangel

    window.addEventListener("click", e => {
        var cX = e.clientX;
        var cY = e.clientY;
        // finner museposisjon
        drawCircle(cX, cY);
        // sender cX og cY til drawCircle
    })

    // i drawCircle trenger de ikke å hette cX og cY som vist her
    /**
     * @param {number} X
     * @param {number} Y
     */
    function drawCircle(X, Y) {
        ctx.beginPath();
        ctx.fillStyle = "red"
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.arc(X, Y, 30, 0, 2 * π);
        ctx.stroke();
        // tegner sirkel 
    }
}