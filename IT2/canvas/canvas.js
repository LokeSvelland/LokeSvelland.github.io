//@ts-check

function setup() {
    let ctx = document.getElementById("tegning").getContext('2d');
    // kobling til tegnings-kontekst for canvas ctx = context
    const π = Math.PI;   // kjekk å ha

    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
    //tegner rektangel 

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
    function drawCircle(X, Y) {
        ctx.beginPath();
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.arc(X, Y, 30, 0, 2 * π);
        ctx.stroke();
        // tegner sirkel hvor jeg trykker
    }
}