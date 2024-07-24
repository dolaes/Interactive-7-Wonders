const china = document.querySelector(".chinaPin");
const petra = document.querySelector(".petraPin");
const colosseum = document.querySelector(".colosseumPin");
const chichen = document.querySelector(".chichenPin");
const machu = document.querySelector(".machuPin");
const taj = document.querySelector(".tajPin");
const christ = document.querySelector(".christPin");

const popup = document.querySelector(".popup");
let moreSection = "";

const close = document.querySelector("#close");
const more = document.querySelector("#more");

function changePopUp(name, location, built, section) {
    popup.querySelector('h2').textContent = name;
    popup.querySelector('#location').textContent = location;
    popup.querySelector('#built').textContent = built;
    moreSection = section;
}

china.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Great Wall of China";
    const location = "Location: China";
    const built = "Built: 700 BCE";
    const section = "#great-wall-of-china";

    changePopUp(name, location, built, section);
});

petra.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Petra";
    const location = "Location: Ma'an, Jordan";
    const built = "Built: 312 BCE";
    const section = "#petra";

    changePopUp(name, location, built, section);
});

colosseum.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Colosseum";
    const location = "Location: Rome, Italy";
    const built = "Built: 80 CE";
    const section = "#colosseum";

    changePopUp(name, location, built, section);
});

chichen.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Chichen Itza";
    const location = "Location: Yucatan, Mexico";
    const built = "Built: 600 CE";
    const section = "#chichen-itza";

    changePopUp(name, location, built, section);
});

machu.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Machu Picchu";
    const location = "Location: Cuzco Region, Peru";
    const built = "Built: 1450 CE";
    const section = "#machu-picchu";

    changePopUp(name, location, built, section);
});

taj.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Taj Mahal";
    const location = "Location: Agra, India";
    const built = "Built: 1643 CE";
    const section = "#taj-mahal";

    changePopUp(name, location, built, section);
});

christ.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Christ the Redeemer";
    const location = "Location: Rio de Janeiro, Brazil";
    const built = "Built: 1931 CE";
    const section = "#christ-the-redeemer";

    changePopUp(name, location, built, section);
});

close.addEventListener("click", function() {
    popup.style.visibility = "hidden";
});

more.addEventListener("click", function() {
    popup.style.visibility = "hidden";
    document.querySelector(moreSection).scrollIntoView({behavior: 'smooth'});
});