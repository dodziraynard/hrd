//Showing loading animation
window.addEventListener("load", showPage);
function showPage() {
    document.querySelector(".page-loading").style.display = "none";
    document.querySelector(".main").style.visibility = "visible";

    //Typing effect
    const texts = ["  Python.            ", "  Django.            ", "  Mobile Dev.           ", "  Git.            ", "  Javascript.            ", "  Java.            ", , "  React.            "]
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
document.addEventListener("scroll", () => {
    let about = document.querySelector(".about").getBoundingClientRect().top;
    let nav = document.querySelector(".nav")
    let screenPos = window.innerHeight / 2;
    if (about < screenPos) {
        nav.classList.add("nav-fixed");
    } else {
        nav.classList.remove("nav-fixed");
    }
})

// Smooth scroll
function scrollAppear(element) {
    var element = document.querySelector(element);
    var elementPos = element.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.2;

    if (elementPos < screenPos) {
        element.classList.add("smooth-appear");
    } else { element.classList.remove("smooth-appear"); }
}


window.addEventListener("load", () => {
    // Toggling sidebar
    let menu = document.querySelector(".menu");
    let burger = document.querySelector(".burger");
    burger.addEventListener("click", () => {
        menu.classList.toggle("toggle-sidebar");
    })
    let about = document.querySelector(".about");
    let services = document.querySelector(".services");
    let portfolio = document.querySelector(".portfolio");
    about.classList.add("smooth-transition-hide");
    services.classList.add("smooth-transition-hide");
    portfolio.classList.add("smooth-transition-hide");
})

// Apperance effect
document.addEventListener("scroll", () => {
    scrollAppear(".about");
    scrollAppear(".services");
    scrollAppear(".portfolio");
})


// Smooth scroll
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    // var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;

        var run = ease(timeElapsed, startPosition, targetPosition - 90, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

window.addEventListener("load", () => {
    var home = document.querySelector("#home");
    var about = document.querySelector("#about");
    var services = document.querySelector("#services");
    var portfolio = document.querySelector("#portfolio");
    var contact = document.querySelector("#contact");
    var contactBtn = document.querySelector("#contact-me-btn")
    home.addEventListener("click", () => {
        smoothScroll("body", 1000);
    })

    about.addEventListener("click", () => {
        smoothScroll(".about", 1000);
    })

    services.addEventListener("click", () => {
        smoothScroll(".services", 1000);
    })

    portfolio.addEventListener("click", () => {
        smoothScroll(".portfolio", 1000);
    })

    contact.addEventListener("click", () => {
        smoothScroll(".contacts", 1000);
    })

    contactBtn.addEventListener("click", () => {
        smoothScroll(".contacts", 1000);
    })
})
