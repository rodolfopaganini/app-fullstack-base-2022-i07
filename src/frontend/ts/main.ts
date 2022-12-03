window.onload = start;

function start(){
    let btn = document.getElementById("btnGreet");
    btn.onclick = greet;
}

function greet() {
    alert("Hi");
}
