const china_pin = document.querySelector(".china");
const popup = document.querySelector(".popup");
const close = document.querySelector("#close");

china_pin.addEventListener("click", function() {
    popup.style.visibility = "visible";
});

close.addEventListener("click", function() {
    popup.style.visibility = "hidden";
});