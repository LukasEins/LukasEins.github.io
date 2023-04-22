var start = new Date('02/26/2003 11:55 AM');
var timer;

function age() {
    var now = new Date();
    var age = now.getTime()-start.getTime();
    var year = (age / 31556926000); // Sekunden Pro Jahr * 1000
    document.getElementById('age').innerHTML = year.toFixed(9);
}

timer = setInterval(age, 1);