function change(img) {
    document.getElementById("bar").style.display = "none";
    document.getElementById("showcase").src = "img/"+img;
    document.getElementById("foo").style.display = "flex";
    document.getElementById("welcome").style.display = "none";
}