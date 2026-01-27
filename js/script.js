document.addEventListener('DOMContentLoaded', function() {
    console.log('Seite geladen');

    // --- BUTTON 1: Start Exploring ---
    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", start_exploring);

    // --- BUTTON 2: Learn More ---
    const learnBtn = document.getElementById("learnBtn");
    learnBtn.addEventListener("click", learn_more);
});

// Die Funktionen können außerhalb stehen bleiben
function start_exploring() {
    // 1. Das Ziel suchen
    const ziel = document.querySelector(".orte-bereich");
    
    // 2. Weich dorthin scrollen
    ziel.scrollIntoView({ behavior: "smooth" });
}

function learn_more() {
    alert("Learn More wurde geklickt!");
}