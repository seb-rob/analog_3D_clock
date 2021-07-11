setInterval(() => {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var hr = ((30*h) + (m/2));
    var mr = 6*m;
    var sr = 6*s;

    document.getElementById("hour").style.transform = `rotate(${hr}deg)`; 
    document.getElementById("min").style.transform = `rotate(${mr}deg)`; 
    document.getElementById("sec").style.transform = `rotate(${sr}deg)`; 
},1000)