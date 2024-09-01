// Scrolls to top of page

function smoothScroll() {
    window.scrollTo (0,0);
}

// Button selects email or telephone depending on device width

const WIDTH = 600;

let email = document.createElement("a");
email.href = "mailto:jspwoodrow@googlemail.com";

let telephone = document.createElement("a");
telephone.href = "tel:07531947931";

function enquireNow() {
if (window.screen.width >= WIDTH) {
    email.click();
} else {
    telephone.click();
}
}