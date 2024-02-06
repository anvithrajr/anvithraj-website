const switchInput = document.getElementById("toggle-mode");
const body = document.body;

switchInput.addEventListener('change', () => {
    body.classList.toggle('dark-mode', switchInput.checked);
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: "smooth"});
            }
        });
    });
});
