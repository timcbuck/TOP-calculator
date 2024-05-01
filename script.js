function buttonFillOnHover() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", (event) => {
            //event.target.style.backgroundColor = fillColor;
            event.target.classList.add("button-fill");
        });
        button.addEventListener("mouseout", (event) => {
            //event.target.style.backgroundColor = fillColor;
            event.target.classList.remove("button-fill");
        });
    });
}


buttonFillOnHover();