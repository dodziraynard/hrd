//Showing loading animation
window.addEventListener("load", showPage);
function showPage() {
    document.querySelector(".page-loading").style.display = "none";
    document.querySelector(".main").style.visibility = "visible";

    //Typing effect
    const texts = ["  Python.            ", "  Django.            ", "  Git.            ", "  Javascript.            ", "  Sass.            "]
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let clear = false;

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        if (clear) {
            letter = currentText.slice(0, --index);
            if (index <= 0) {
                clear = false;
                count++;
                index = 0;
            }
        } else {
            letter = currentText.slice(0, ++index);
        }

        document.querySelector(".typewrite").textContent = letter;
        if (letter.length === currentText.length) {
            clear = true;
        }
        setTimeout(type, 100);
    })();
}

// Changing navbar class
document.addEventListener("scroll", ()=>{
    let about = document.querySelector(".about").getBoundingClientRect().top;
    let nav = document.querySelector(".nav")
    let screenPos = window.innerHeight/2;
    if (about < screenPos) {
        nav.classList.add("nav-fixed");
    } else {
        nav.classList.remove("nav-fixed");
    }
})
