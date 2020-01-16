const btnClicker = document.getElementById("btnClicker");
const display = document.getElementById("display");
const multiplier = document.getElementById("multiplier");
const autoClicker = document.getElementById("autoClicker")
let score = 0;
let count = 1;
let multiplierPrice = 50;

btnClicker.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

function addScore() {
    score = score + count;
    if (score > 1000) {
        display.innerHTML = `<span>${score / 1000}k</span>`;
    } else if (score > 1000000) {
        display.innerHTML = `<span>${score / 1000000}M</span>`;
    } else if (score > 1000000000) {
        display.innerHTML = `<span>${score / 1000000000}B</span>`;
    } else {
        display.innerHTML = `<span>${score}</span>`;
    }
    if (score >= 200) {
        autoClicker.disabled = false;
    } else {
        autoClicker.disabled = true;
    }

    if (score >= multiplierPrice) {
        multiplier.disabled = false;
    } else {
        multiplier.disabled = true;
    }
}

function increment() {
    if (score >= multiplierPrice) {
        multiplier.innerHTML = `<span>Multiplier x ${count + 1} (Price = ${multiplierPrice})</span>`;
        count++;
        score = score - multiplierPrice;
        display.innerHTML = `<span>${score}</span>`;
        multiplierPrice = multiplierPrice * 2;
        multiplier.innerHTML = `<span>Multiplier x ${count + 1} (Price = ${multiplierPrice})</span>`;
        multiplier.disabled = true;
    }
}

function autoClickerBonus() {
    if (score >= 200) {
        setInterval(() => {
            btnClicker.click();
        }, 1000);
        score = score - 200;
        autoClicker.disabled = true;
        display.innerHTML = `<span>${score}</span>`;
    }
}

btnClicker.onclick = addScore;
multiplier.onclick = increment;
autoClicker.onclick = autoClickerBonus;