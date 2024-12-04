function es() {
document.getElementById("en").style.display="none";
document.getElementById("br").style.display="none";
document.getElementById("es").style.display="block";}
function en() {
document.getElementById("es").style.display="none";
document.getElementById("br").style.display="none";
document.getElementById("en").style.display="block";}
document.getElementById("es").style.display="block";
document.getElementById("br").style.display="block";
document.getElementById("en").style.display="block";
     if (document.referrer.indexOf("https://aphysica.github.io/torassa/es.html") != -1) { es(); }
else if (document.referrer.indexOf("https://aphysica.github.io/torassa/en.html") != -1) { en(); }
else if ((window.navigator.language).substr(0, 2) == "es") { es(); }
else if ((window.navigator.language).substr(0, 2) == "en") { en(); }
