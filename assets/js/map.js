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
const toTop = document.querySelector("#toTop");

function changePopUp(name, location, built, section, image) {
    popup.querySelector('img').src = image;
    popup.querySelector('img').alt = name;
    popup.querySelector('h2').textContent = name;
    popup.querySelector('#location').innerHTML = location;
    popup.querySelector('#built').innerHTML = built;
    moreSection = section;
}

china.addEventListener("click", function(event) {
    popup.style.visibility = "visible";

    const image = "https://images.pexels.com/photos/1653823/pexels-photo-1653823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const name = "Great Wall of China";
    const location = "<b>Location:</b> China";
    const built = "<b>Built:</b> 700 BCE";
    const section = "#great-wall-of-china";

    changePopUp(name, location, built, section, image);
    event.stopPropagation();
    closePopUp();
});

petra.addEventListener("click", function(event) {
    popup.style.visibility = "visible";

    const image = "https://images.pexels.com/photos/18717382/pexels-photo-18717382/free-photo-of-facade-of-the-treasury-in-petra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const name = "Petra";
    const location = "<b>Location:</b> Ma'an, Jordan";
    const built = "<b>Built:</b> 312 BCE";
    const section = "#petra";

    changePopUp(name, location, built, section, image);
    event.stopPropagation();
    closePopUp();
});

colosseum.addEventListener("click", function(event) {
    popup.style.visibility = "visible";

    const image = "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const name = "Colosseum";
    const location = "<b>Location:</b> Rome, Italy";
    const built = "<b>Built:</b> 80 CE";
    const section = "#colosseum";

    changePopUp(name, location, built, section, image);
    event.stopPropagation();
    closePopUp();
});

chichen.addEventListener("click", function(event) {
    popup.style.visibility = "visible";

    const image = "https://images.pexels.com/photos/12046436/pexels-photo-12046436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const name = "Chichen Itza";
    const location = "<b>Location:</b> Yucatan, Mexico";
    const built = "<b>Built:</b> 600 CE";
    const section = "#chichen-itza";

    changePopUp(name, location, built, section, image);
    event.stopPropagation();
    closePopUp();
});

machu.addEventListener("click", function(event) {
    popup.style.visibility = "visible";

    const image = "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=600";
    const name = "Machu Picchu";
    const location = "<b>Location:</b> Cuzco Region, Peru";
    const built = "<b>Built:</b> 1450 CE";
    const section = "#machu-picchu";

    changePopUp(name, location, built, section, image);
    event.stopPropagation();
    closePopUp();
});

taj.addEventListener("click", function(event) {
    popup.style.visibility = "visible";

    const image = "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg";
    const name = "Taj Mahal";
    const location = "<b>Location:</b> Agra, India";
    const built = "<b>Built:</b> 1643 CE";
    const section = "#taj-mahal";

    changePopUp(name, location, built, section, image);
    event.stopPropagation();
    closePopUp();
});

christ.addEventListener("click", function(event) {
    popup.style.visibility = "visible";

    const image = "https://images.pexels.com/photos/17782075/pexels-photo-17782075/free-photo-of-christ-the-redeemer-statue-in-rio-de-janeiro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const name = "Christ the Redeemer";
    const location = "<b>Location:</b> Rio de Janeiro, Brazil";
    const built = "<b>Built:</b> 1931 CE";
    const section = "#christ-the-redeemer";

    changePopUp(name, location, built, section, image);
    event.stopPropagation();
    closePopUp();
});

function closePopUp(){
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".popup")) {
            popup.style.visibility = "hidden";
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            popup.style.visibility = "hidden";
        }
    });
}

more.addEventListener("click", function() {
    popup.style.visibility = "hidden";
    document.querySelector(moreSection).scrollIntoView({behavior: 'smooth'});
});

toTop.addEventListener("click", function() {
    document.body.scrollIntoView({behavior: 'smooth'});
});