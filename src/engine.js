const btnClicker = document.getElementById("btnClicker");
const display = document.getElementById("display");
const multiplier = document.getElementById("multiplier");
const autoClicker = document.getElementById("autoClicker");
const autoClickerCounts = document.getElementById("autoClickerCount");
const multiplierCounts = document.getElementById("multiplierCount");
const plus1 = document.getElementById("plus1");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");
const plus4 = document.getElementById("plus4");
const plus5 = document.getElementById("plus5");
let score = 0;
let count = 1;
let multiplierCount = 0;
let multiplierPrice = 50;
let autoclickerPrice = 200;
let autoclickerCount = 1;

btnClicker.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

function addScore() {
    score = score + count;
    if (score >= 1000 && score <= 1000000) {
        display.innerHTML = `<span>${(score / 1000).toFixed(2)}k</span>`;
    } else if (score >= 1000000 && score <= 1000000000) {
        display.innerHTML = `<span>${(score / 1000000).toFixed(2)}M</span>`;
    } else if (score >= 1000000000) {
        display.innerHTML = `<span>${(score / 1000000000).toFixed(2)}B</span>`;
    } else {
        display.innerHTML = `<span>${score}</span>`;
    }
    if (score >= autoclickerPrice) {
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
        multiplierCount++;
        score = score - multiplierPrice;
        display.innerHTML = `<span>${score}</span>`;
        multiplierPrice = multiplierPrice * 2;
        multiplierCounts.innerHTML = `<span>${multiplierCount}</span>`;
        multiplier.innerHTML = `<span>Multiplier x ${count + 1} (Price = ${multiplierPrice})</span>`;
        multiplier.disabled = true;
        if (score < autoclickerPrice) {
            autoClicker.disabled = true;
        }
    }
}

function autoClickerBonus() {
    if (score >= autoclickerPrice) {
        autoclickerCount++;
        score = score - Math.floor(autoclickerPrice);
        setInterval(() => {
            score = score + 1;
            display.innerHTML = `<span>${score}</span>`;
            if (score >= 1000 && score <= 1000000) {
                display.innerHTML = `<span>${(score / 1000).toFixed(2)}k</span>`;
            } else if (score >= 1000000 && score <= 1000000000) {
                display.innerHTML = `<span>${(score / 1000000).toFixed(2)}M</span>`;
            } else if (score >= 1000000000) {
                display.innerHTML = `<span>${(score / 1000000000).toFixed(2)}B</span>`;
            } else {
                display.innerHTML = `<span>${score}</span>`;
            }
        }, 1000);
        display.innerHTML = `<span>${score}</span>`;
        autoclickerPrice = autoclickerPrice * 1.5;
        autoClickerCounts.innerHTML = `<span>${autoclickerCount - 1}</span>`;
        autoClicker.innerHTML = `<span>Autoclicker (Price = ${Math.floor(autoclickerPrice)})</span>`;
        autoClicker.disabled = true;
        if (score < multiplierPrice) {
            multiplier.disabled = true;
        }
    }
}

btnClicker.addEventListener("mousedown", function () {
    let random = Math.floor(Math.random() * 5);
    if (random === 0) {
        plus1.innerHTML = `+${count}`;
        plus1.classList.remove("hidden");
        setTimeout(() => {
            plus1.classList.add("hidden");
        }, 600);
    }
    if (random === 1) {
        plus2.innerHTML = `+${count}`;
        plus2.classList.remove("hidden");
        setTimeout(() => {
            plus2.classList.add("hidden");
        }, 600);
    }
    if (random === 2) {
        plus3.innerHTML = `+${count}`;
        plus3.classList.remove("hidden");
        setTimeout(() => {
            plus3.classList.add("hidden");
        }, 600);
    }

    if (random === 3) {
        plus4.innerHTML = `+${count}`;
        plus4.classList.remove("hidden");
        setTimeout(() => {
            plus4.classList.add("hidden");
        }, 600);
    }

    if (random === 4) {
        plus5.innerHTML = `+${count}`;
        plus5.classList.remove("hidden");
        setTimeout(() => {
            plus5.classList.add("hidden");
        }, 600);
    }
});


btnClicker.onclick = addScore;
multiplier.onclick = increment;
autoClicker.onclick = autoClickerBonus;