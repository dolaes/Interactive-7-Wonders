document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("poll-form");
    const choices = document.querySelectorAll(".choice");

    
    const selectedWonders = JSON.parse(localStorage.getItem("selectedWonders")) || [];

    
    function handleChoiceSelection(event) {
        event.currentTarget.classList.toggle("selected");
        const checkbox = event.currentTarget.querySelector("input[type='checkbox']");
        checkbox.checked = !checkbox.checked;
    }

    
    choices.forEach(choice => {
        const checkbox = choice.querySelector("input[type='checkbox']");
        if (selectedWonders.includes(checkbox.value)) {
            choice.classList.add("selected");
            checkbox.checked = true;
        }
        choice.addEventListener("click", handleChoiceSelection);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const selectedWonders = Array.from(document.querySelectorAll('input[name="wonder"]:checked')).map(checkbox => checkbox.value);
        if (selectedWonders.length > 0) {
            localStorage.setItem("selectedWonders", JSON.stringify(selectedWonders));
            alert("Your selections have been saved: " + selectedWonders.join(", "));
        } else {
            alert("Please select at least one option before submitting.");
        }
    });
});
