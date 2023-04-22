let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 250 },
    { t: "{_}", ms: 250 },
    { t: "{ }", ms: 250 },
    { t: "{_}", ms: 250 },
    { t: "{L_}", ms: 250 },
    { t: "{Lu_}", ms: 150 },
    { t: "{Luk_}", ms: 150 },
    { t: "{Luka_}", ms: 150 },
    { t: "{Lukas_}", ms: 150 },
    { t: "{LukasE_}", ms: 150 },
    { t: "{LukasEi_}", ms: 150 },
    { t: "{LukasEin_}", ms: 150 },
    { t: "{LukasEins_}", ms: 150 },
    { t: "{LukasEins }", ms: 250 },
    { t: "{LukasEins_}", ms: 250 },
    { t: "{LukasEins }", ms: 250 },
    { t: "{LukasEins_}", ms: 250 },
    { t: "{LukasEins}", ms: 250 },
    { t: "{LukasEins}", ms: 250 }
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
