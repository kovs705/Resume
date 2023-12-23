
var rainbowColors = ['#FF7F00', '#0000FF', '#4B0082', '#8B00FF'];
var skillSetItems = document.querySelectorAll('.skill-set li');

for (var i = 0; i < skillSetItems.length; i++) {
    
    skillSetItems[i].onmouseover = function(e) {
        var color = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
        this.style.backgroundColor = color;
    } 

    skillSetItems[i].onmouseout = function(e) {
        this.style.backgroundColor = '';
    }

    skillSetItems[i].onclick = function(e) {
        var link = this.querySelector('a');
        if (link) {
            window.location = link.href;
        }
    }
}
