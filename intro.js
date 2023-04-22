let header = document.querySelector('#intro');
let anim = [
    { t: "〘 〙", ms: 300 },
    { t: "〘_〙", ms: 300 },
    { t: "〘 〙", ms: 300 },
    { t: "〘_〙", ms: 300 },
    { t: "〘L_〙", ms: 200 },
    { t: "〘Lu_〙", ms: 200 },
    { t: "〘Luk_〙", ms: 200 },
    { t: "〘Luka_〙", ms: 200 },
    { t: "〘Lukas_〙", ms: 200 },
    { t: "〘LukasE_〙", ms: 200 },
    { t: "〘LukasEi_〙", ms: 200 },
    { t: "〘LukasEin_〙", ms: 200 },
    { t: "〘LukasEins〙", ms: 200 },,
    { t: "〘LukasEins_〙", ms: 300 },
    { t: "〘LukasEins 〙", ms: 300 },
    { t: "〘LukasEins_〙", ms: 300 },
    { t: "〘LukasEins〙", ms: 300 },
    { t: "〘LukasEins〙", ms: 300 }
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
