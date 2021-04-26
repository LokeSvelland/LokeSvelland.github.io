// @ts-check

const allScores = [1, 2, 3];

function setup() {

}

/**
 * Skal sjekke om dette er en ny highscore
 * eller lik forje
 * "Hiscore"|"samme"|""
 * @param {number} score
 * @returns {String} | null}
 */
function harViNyHiScore(score) {
    let max = allScores[0];
    for (let i = 0; i < allScores.length; i++) {
        const verdi = allScores[i];
        if (verdi > score) return "";
        if (verdi > max) max = verdi;
    }
    allScores.push(score);
    if (score < max) return "";
    if (score === max) return "samme";
    if (score > max) return "HIGH SCORE"
}


export { setup }