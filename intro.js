let header = document.querySelector('#intro');
let anim = [
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "L_", ms: 100 },
    { t: "Lu_", ms: 100 },
    { t: "Luk_", ms: 100 },
    { t: "Luka_", ms: 100 },
    { t: "Lukas_", ms: 100 },
    { t: "LukasE_", ms: 100 },
    { t: "LukasEi_", ms: 100 },
    { t: "LukasEin_", ms: 100 },
    { t: "LukasEins", ms: 100 },,
    { t: "LukasEins_", ms: 200 },
    { t: "LukasEins ", ms: 200 },
    { t: "LukasEins_", ms: 200 },
    { t: "LukasEins", ms: 200 },
    { t: "LukasEins", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();
