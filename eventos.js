document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("miDiv");
    const button = div.querySelector("button");

    
    div.addEventListener("click", () => {
        alert("Hola! Soy el div");
    });

        button.addEventListener("click", (event) => {
            event.stopPropagation();
        });
});