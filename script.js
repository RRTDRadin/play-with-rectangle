let div = document.querySelector('.rectangle');

function makecircle(){
    div.style.borderRadius = "50%";
}

function hide(){
    div.style.display = "none";
}

function show(){
    div.style.display = "block";
}

div.onmouseenter = function (){
    div.style.background = "green";
}

div.onmouseout = function (){
    div.style.background = "none";
}