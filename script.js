document.addEventListener('DOMContentLoaded', function() {
    var lang = navigator.language || navigator.userLanguage;
    newChangeLanguage(lang);

    var rainbowColors = [
        '#FF7F00', '#5858fa', '#8b48bb', '#37b63c',
        '#FF0000', '#1f95c0', '#713cda', '#348686',
        '#b62a76', '#FFD700', '#ff7303', '#FF4500'
    ];
    var skillSetItems = document.querySelectorAll('.skill-set li');

    skillSetItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            var color = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
            this.style.backgroundColor = color;
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});