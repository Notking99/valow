let r1 = document.getElementById('r1');
let mapdiv = document.getElementById('mapdiv');

let x =120;
let y = 150;
function show() {

    let icon1 = document.createElement('img');
    
    icon1.setAttribute('src','img/split.png');
    icon1.setAttribute('width', '30px');
    icon1.setAttribute('height', '30px');
    //icon1.setAttribute('class','absol');
    icon1.setAttribute('style',`position: absolute; left:${x}px; top:${y}px;`);

    x+=50;
    y+= 30;
    mapdiv.appendChild(icon1);
}