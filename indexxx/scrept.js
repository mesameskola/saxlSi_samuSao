const screen = document.querySelector('.screen');
console.dir(screen);
screen.inerText = '0';

function btn(a) {
    if (a === "." && screen.innerText === "") {
        screen.innerText = "0.";
    } else {
        screen.innerText = screen.innerText + a;
    }
}
function rts() {
    screen.innerText = "";
}

function del() {
    screen.innerText = screen.innerText.slice(0, -1);
}

function operators(op) {
    if (screen.innerText === "") {
        screen.innerText = screen.innerText;
    } else if (
        screen.inerText.at(-1) === "+" ||
        screen.inerText.at(-1) === "-" ||
        screen.inerText.at(-1) === "*" ||
        screen.inerText.at(-1) === "/"
    ) {
        screen.innerText = screen.innerText.slice(0, -1) + op;
    }
    else {
        screen.innerText = screen.innerText + op;
    }
}

function tolia() {
    screen.innerText = eval(screen.innerText);
}