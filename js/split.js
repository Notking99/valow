let mapdiv = document.getElementById('mapdiv');

let x = 120;
let y = 150;

function show() {

    let icon1 = document.createElement('img');

    icon1.setAttribute('src', 'img/split.png');
    icon1.setAttribute('width', '30px');
    icon1.setAttribute('height', '30px');
    //icon1.setAttribute('class','absol');
    icon1.setAttribute('style', `position: absolute; left:${x}px; top:${y}px;`);

    x += 50;
    y += 30;
    mapdiv.appendChild(icon1);
}

const modal = document.getElementById("modal");

function modalOn() { modal.style.display = "flex" }
function modalOff() { modal.style.display = "none" }
function isModalOn() { return modal.style.display === "flex" }

//이미지 누르면 모달창 띄움
const imgModal = document.getElementById("img-modal");
imgModal.addEventListener("click", e => {
    modalOn()
});

//클로즈 버튼 클릭 시, 모달창 닫음
const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modalOff()
});

//외부영역 클릭 시,
modal.addEventListener("click", e => {
    const evTarget = e.target
    if (evTarget.classList.contains("modal-overlay")) {
        modalOff()
    }
});

//esc버튼
window.addEventListener("keyup", e => {
    if (isModalOn() && e.key === "Escape") {
        modalOff()
    }
});