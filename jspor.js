
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
    }   else {
            el.classList.remove("active");
    }
    });
}

window.addEventListener("scroll", revealOnScroll);


revealOnScroll();


function copyEmail(event) {
    event.preventDefault();
    const email = "henifourtuna@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const alertBox = document.getElementById("copyAlert");
        alertBox.classList.add("show");
        setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2000);
    });
}
