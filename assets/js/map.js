const china = document.querySelector(".china");
const petra = document.querySelector(".petra");
const colosseum = document.querySelector(".colosseum");
const chichen = document.querySelector(".chichen");
const machu = document.querySelector(".machu");
const taj = document.querySelector(".taj");
const christ = document.querySelector(".christ");

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
    const section = "#test";

    changePopUp(name, location, built, section);
    console.log(moreSection);
});

petra.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Petra";
    const location = "Location: Ma'an, Jordan";
    const built = "Built: 312 BCE";
    const section = "#test";

    changePopUp(name, location, built, section);
    console.log(moreSection);
});

colosseum.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Colosseum";
    const location = "Location: Rome, Italy";
    const built = "Built: 80 CE";
    const section = "#test";

    changePopUp(name, location, built, section);
    console.log(moreSection);
});

chichen.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Chichen Itza";
    const location = "Location: Yucatan, Mexico";
    const built = "Built: 600 CE";
    const section = "#test";

    changePopUp(name, location, built, section);
    console.log(moreSection);
});

machu.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Machu Picchu";
    const location = "Location: Cuzco Region, Peru";
    const built = "Built: 1450 CE";
    const section = "#test";

    changePopUp(name, location, built, section);
    console.log(moreSection);
});

taj.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Taj Mahal";
    const location = "Location: Agra, India";
    const built = "Built: 1643 CE";
    const section = "#test";

    changePopUp(name, location, built, section);
    console.log(moreSection);
});

christ.addEventListener("click", function() {
    popup.style.visibility = "visible";

    const name = "Christ the Redeemer";
    const location = "Location: Rio de Janeiro, Brazil";
    const built = "Built: 1931 CE";
    const section = "#test";

    changePopUp(name, location, built, section);
    console.log(moreSection);
});

close.addEventListener("click", function() {
    popup.style.visibility = "hidden";
});

more.addEventListener("click", function() {
    popup.style.visibility = "hidden";
    document.querySelector(moreSection).scrollIntoView({behavior: 'smooth'});
});