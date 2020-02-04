var h1;

var body;


function fiets() {
    h1=document.getElementById("kleur").value;
}

function band(){
    body=document.getElementById("kleur").value;
}


function kleur() {
    document.getElementById("h1").style.color=h1;
    document.getElementById("body").style.backgroundColor=body;
}