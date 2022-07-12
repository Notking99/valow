let mapdiv = document.getElementById('mapdiv');
var cha = document.getElementsByName("cha");

for (i = 0; i < cha.length; i++) {
    cha[i].addEventListener('click', function () {

        switch (this.id) {
            case "astra":
                initicon();
                makeicon(10, 10);
                makeicon(100, 10);
                makeicon(200, 10);
                makeicon(300, 10);
                break;

            case "breach":
                initicon();
                makeicon(10, 100);
                makeicon(100, 100);
                makeicon(200, 100);
                makeicon(300, 100);
                break;

            default:
                initicon();
        }

    });
}

function initicon() {
    var dellist = document.getElementsByClassName('mapicon');
    
    const listlength = dellist.length;
    
    for (z = 0; z < listlength; z++) {
        console.log(dellist[z]);
        dellist[0].remove();
    }

}

function makeicon(x, y) {

    let icon = document.createElement('img');

    icon.setAttribute('src', 'img/split.png');
    icon.setAttribute('width', '30px');
    icon.setAttribute('height', '30px');
    icon.setAttribute('class', 'mapicon');
    icon.setAttribute('style', `position: absolute; left:${x}px; top:${y}px;`);

    mapdiv.appendChild(icon);
}







//모달창 관련 코드
const modal = document.getElementById("modal");
const youtube = document.getElementById("youtube");

function modalOn() { modal.style.display = "flex"; }
function modalOff() { modal.style.display = "none"; }
function isModalOn() { return modal.style.display === "flex"; }


//이미지 누르면 모달창 띄움
//모달창 유튜브 주소만 바꿔서 재사용 할 수 있을듯
const imgModal = document.getElementById("img-modal");
imgModal.addEventListener("click", e => {
    modalOn();
    youtube.setAttribute("src", "https://www.youtube.com/embed/YwC0m0XaD2E");
});

//클로즈 버튼 클릭 시, 모달창 닫음
const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modalOff();
    youtube.setAttribute("src", "");
});

//외부영역 클릭 시,
modal.addEventListener("click", e => {
    const evTarget = e.target
    if (evTarget.classList.contains("modal-overlay")) {
        modalOff();
        youtube.setAttribute("src", "");
    }
});

//esc버튼
window.addEventListener("keyup", e => {
    if (isModalOn() && e.key === "Escape") {
        modalOff();
        youtube.setAttribute("src", "");
    }
});