const theme_oval = documant. querySelector('.theme_oval');
const conteiner = documant. querySelector('.conteiner');
const btsns = documant. querySelectorAll('.btsn');
const screeen = documant. querySelector('.screen');
const dele = documant. querySelector('.del');
const resetta = documant. querySelector('.resetta');
const toliaa = documant. querySelector('.tolia');
console.dir(theme_oval);

theme_oval.children[0].style.opacity = '1';

function them1() {
    theme_oval.children[0].style.opacity = '1';
    theme_oval.children[1].style.opacity = '0'; 
    theme_oval.children[2].style.opacity = '0';
    conteiner.style.backgroundColor = 'gray';
    btsns.foreeach((btsn) => {

    }) 
    dele.style.backgroundColor = 'orange';
    screeen.style.backgroundColor = 'purple';
    resetta.style.backgroundColor = 'white';
    toliaa.style.backgroundColor = 'purple';
}

function them2() {
    theme_oval.children[0].style.opacity = '0';
    theme_oval.children[1].style.opacity = '1'; 
    theme_oval.children[2].style.opacity = '0';
    conteiner.style.backgroundColor = 'red';
    btsns.foreeach((btsn) => {

    }) 
    dele.style.backgroundColor = 'orange';
    screeen.style.backgroundColor = 'green';
    resetta.style.backgroundColor = 'yellow';
    toliaa.style.backgroundColor = 'purple';
}

function them1() {
    theme_oval.children[0].style.opacity = '0';
    theme_oval.children[1].style.opacity = '0'; 
    theme_oval.children[2].style.opacity = '1';
    conteiner.style.backgroundColor = 'yellow';
    btsns.foreeach((btsn) => {

    }) 
    dele.style.backgroundColor = 'orange';
    screeen.style.backgroundColor = 'blue';
    resetta.style.backgroundColor = 'green';
    toliaa.style.backgroundColor = 'pink';
}