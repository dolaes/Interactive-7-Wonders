const china_box = document.querySelector('#china-checkbox-list');
const petra_box = document.querySelector("#petra-checkbox-list");
const colosseum_box = document.querySelector("#colosseum-checkbox-list");
const chichen_box = document.querySelector("#chichen-checkbox-list");
const machu_box = document.querySelector("#machu-checkbox-list");
const taj_box = document.querySelector("#taj-checkbox-list");
const christ_box = document.querySelector("#christ-checkbox-list");

const checklist = [china_box, petra_box, colosseum_box, chichen_box, machu_box, taj_box, christ_box];
const locallist = ["china", "petra", "colosseum", "chichen", "machu", "taj", "christ"];

initializeChecklist();

function initializeChecklist() {
    for (let i = 0; i < 7; i++) {
        let check = localStorage.getItem(locallist[i]);
        if (check === null) {
            check = false;
        } else {
            check = JSON.parse(localStorage.getItem(locallist[i]));
        }
        checklist[i].checked = check;
        localStorage.setItem(locallist[i], check);
    }
}

function changeChecklist(wonder) {
    let check = JSON.parse(localStorage.getItem(wonder));
    if (check === false) {
        check = true;
    } else {
        check = false;
    }
    localStorage.setItem(wonder, check);
}

china_box.addEventListener("click", function () {
    changeChecklist(locallist[0]);
});

petra_box.addEventListener("click", function () {
    changeChecklist(locallist[1]);
});

colosseum_box.addEventListener("click", function () {
    changeChecklist(locallist[2]);
});

chichen_box.addEventListener("click", function () {
    changeChecklist(locallist[3]);
});

machu_box.addEventListener("click", function () {
    changeChecklist(locallist[4]);
});

taj_box.addEventListener("click", function () {
    changeChecklist(locallist[5]);
});

christ_box.addEventListener("click", function () {
    changeChecklist(locallist[6]);
});