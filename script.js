const button = document.getElementById("openGift");
const content = document.getElementById("content");

button.addEventListener("click", () => {

    content.style.display = "block";

    content.scrollIntoView({
        behavior: "smooth"
    });

});