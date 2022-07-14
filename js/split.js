let mapdiv = document.getElementById('mapdiv');
var cha = document.getElementsByName("cha");

//캐릭터 버튼에 클릭 이벤트 추가
//switch-case문안에 makeicon을 넣으면 편하게 아이콘 생성
for (i = 0; i < cha.length; i++) {
    cha[i].addEventListener('click', function () {

        switch (this.id) {
            case "astra":
                initicon();
                makeicon(1, 1);
                makeicon(10, 1);
                makeicon(20, 1);
                makeicon(30, 1);
                break;

            case "breach":
                initicon();
                makeicon(1, 10);
                makeicon(10, 10);
                makeicon(20, 10);
                makeicon(30, 10);
                break;

            case "brimstone":
                initicon();
                makeicon(1, 20);
                makeicon(10, 20);
                makeicon(20, 20);
                makeicon(30, 20);
                break;

            case "chamber":
                initicon();
                makeicon(1, 30);
                makeicon(10, 30);
                makeicon(20, 30);
                makeicon(30, 30);
                break;

            case "cypher":
                initicon();
                makeicon(1, 40);
                makeicon(10, 40);
                makeicon(20, 40);
                makeicon(30, 40);
                break;

            case "fade":
                initicon();
                makeicon(1, 50);
                makeicon(10, 50);
                makeicon(20, 50);
                makeicon(30, 50);
                break;

                case "jett":
                initicon();
                makeicon(1, 60);
                makeicon(10, 60);
                makeicon(20, 60);
                makeicon(30, 60);
                break;

                case "killjoy":
                initicon();
                makeicon(1, 70);
                makeicon(10, 70);
                makeicon(20, 70);
                makeicon(30, 70);
                break;

                case "ko":
                initicon();
                makeicon(1, 80);
                makeicon(10, 80);
                makeicon(20, 80);
                makeicon(30, 80);
                break;

                case "neon":
                initicon();
                makeicon(1, 90);
                makeicon(10, 90);
                makeicon(20, 90);
                makeicon(30, 90);
                break;

                case "omen":
                initicon();
                makeicon(50, 1);
                makeicon(60, 1);
                makeicon(70, 1);
                makeicon(80, 1);
                break;

                case "pheonix":
                initicon();
                makeicon(50, 10);
                makeicon(60, 10);
                makeicon(70, 10);
                makeicon(80, 10);
                break;

                case "raze":
                initicon();
                makeicon(50, 20);
                makeicon(60, 20);
                makeicon(70, 20);
                makeicon(80, 20);
                break;

                case "reyna":
                initicon();
                makeicon(50, 30);
                makeicon(60, 30);
                makeicon(70, 30);
                makeicon(80, 30);
                break;

                case "sage":
                initicon();
                makeicon(50, 40);
                makeicon(60, 40);
                makeicon(70, 40);
                makeicon(80, 40);
                break;

                case "skye":
                initicon();
                makeicon(50, 50);
                makeicon(60, 50);
                makeicon(70, 50);
                makeicon(80, 50);
                break;

                case "sova":
                initicon();
                makeicon(50, 60);
                makeicon(60, 60);
                makeicon(70, 60);
                makeicon(80, 60);
                break;

                case "viper":
                initicon();
                makeicon(50, 70);
                makeicon(60, 70);
                makeicon(70, 70);
                makeicon(80, 70);
                break;

                case "yoru":
                initicon();
                makeicon(50, 80);
                makeicon(60, 80);
                makeicon(70, 80);
                makeicon(80, 80);
                break;

            default:
                initicon();
        }

    });
}

//기존의 생성된 모든 아이콘 태그를 삭제하는 함수
//mapicon클래스를 지닌 친구들을 모두 삭제한다.
function initicon() {
    var dellist = document.getElementsByClassName('mapicon');

    const listlength = dellist.length;

    for (z = 0; z < listlength; z++) {
        console.log(dellist[z]);
        dellist[0].remove();
    }

}

//맵에 아이콘을 생성하는 함수
//x,y에 값을 입력하여 아이콘의 위치를 설정할 수 있음
function makeicon(x, y) {

    let icon = document.createElement('img');

    icon.setAttribute('src', 'img/split.png');
    //아이콘 크기는 아래 두줄로 조정
    icon.setAttribute('width', '30px');
    icon.setAttribute('height', '30px');
    icon.setAttribute('class', 'mapicon');
    icon.setAttribute('style', `position: absolute; left:${x}%; top:${y}%;`);

    mapdiv.appendChild(icon);
}







//모달창 관련 코드
const modal = document.getElementById("modal");
const youtube = document.getElementById("youtube");

//모달창 css속성을 flex로 바꿔서 보여지게 함
function modalOn() { modal.style.display = "flex"; }
//모달창 css속성을 none으로 바꿔 숨김
function modalOff() { modal.style.display = "none"; }
function isModalOn() { return modal.style.display === "flex"; }


//이미지에 클릭 이벤트 넣음
//모달창을 띄우고 모달창 영상태그에 img태그에 저장되어있는 title 값을 넣음
const imgmodal1 = document.getElementsByClassName('img-modal');
for(x=0; x<imgmodal1.length; x++){
    imgmodal1[x].addEventListener('click', function () {
        modalOn();
        console.log(this);
        youtube.setAttribute("src", this.getAttribute('title'));
    });
}


//클로즈 버튼 클릭 시, 모달창 닫음
//영상은 뒤에서 계속 실행되기 때문에, 영상 태그의 주소를 아예 빼버림
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