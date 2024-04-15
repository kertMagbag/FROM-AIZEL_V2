window.onload = () => {
    document.body.classList.remove("container");
    showIdol(); // Call the function with the correct casing
};

function showIdol() {
    var idol = document.querySelector('.idol');
    idol.style.display = 'block';
    idol.style.marginBottom = '0';
    idol.style.position = 'absolute';
    idol.style.top = '150px';
    idol.style.left = '72%';
    idol.style.zIndex = '1'; 
    idol.style.color = "white";
    idol.style.fontSize = "34px";
    idol.style.transform = 'translateX(-50%)';
    var text = document.querySelector('.aizel');
    var textContent = "From: ";
    
    var index = 0;

    function animateText() {
        if (index < textContent.length) {
            text.textContent += textContent.charAt(index);
            index++;
            setTimeout(animateText, 100);
        } else {
            var span = document.createElement('span');
            span.textContent = "Aizel Picardal";
            span.style.color = "pink"; // Change color to your desired color
            text.appendChild(span);
        }
    }

    animateText();
}