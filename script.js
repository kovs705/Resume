document.addEventListener('DOMContentLoaded', function() {
    var lang = navigator.language || navigator.userLanguage;
    newChangeLanguage(lang);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});