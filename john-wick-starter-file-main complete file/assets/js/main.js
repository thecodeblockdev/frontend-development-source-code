/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // click each nav__link to remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((event) => {
    event.addEventListener("click", linkAction);
});
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();
    // service id - template id - #form - publickey
    // service_6x7pg8u;
    // template_pqhm2gk;
    // dJSX6cOZ7ioRDgxsN;
    emailjs
        .sendForm(
            "service_6x7pg8u",
            "template_pqhm2gk",
            "#contact-form",
            "dJSX6cOZ7ioRDgxsN"
        )
        .then(
            () => {
                // Show sent message
                contactMessage.textContent = "Message sent successfully ✅";
                // Remove message after it is sent
                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);
                // clear inputs field of form
                setTimeout(() => {
                    contactForm.reset();
                }, 3000);
            },
            () => {
                // Show error msg
                contactMessage.textContent =
                    "Message not sent (service error) ❌";
            }
        );
};
contactForm.addEventListener("submit", sendEmail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // when the scroll is higher than 350 vh, add the show-scroll class to the header tag
    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((currentSection) => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 58;
        const sectionId = currentSection.getAttribute("id");
        // const sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId +']')
        const sectionsClass = document.querySelector(
            `.nav__menu a[href*='${sectionId}']`
        );

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 400,
});
sr.reveal(
    `.home__data, .home__social, .contact__container, .footer__container`
);
sr.reveal(`.home__image`, { origin: "bottom" });
sr.reveal(`.about__data, .skills__data`, { origin: "left" });
sr.reveal(`.about__image, .skills__content`, { origin: "right" });
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
