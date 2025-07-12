function openTab(event, tabName) {
    let tabContents = document.querySelectorAll(".tab-content");
    let tabButtons = document.querySelectorAll(".tab-button");
    
    tabContents.forEach(tab => {
        tab.style.display = "none";
        tab.classList.remove("active");
    });
    
    tabButtons.forEach(button => {
        button.classList.remove("active");
    });
    
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});

document.addEventListener("DOMContentLoaded", function () {
    const titleText = "Welcome to My Portfolio";
    const descriptionText = "Hi, I'm Ball. I'm a student passionate about technology.";
    const speed = 50; 

    let titleIndex = 0;
    let descriptionIndex = 0;

    function typeTitle() {
        if (titleIndex < titleText.length) {
            document.getElementById("typewriter-title").textContent += titleText.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeTitle, speed);
        } else {
            setTimeout(typeDescription, 500); 
        }
    }

    function typeDescription() {
        if (descriptionIndex < descriptionText.length) {
            document.getElementById("typewriter-text").textContent += descriptionText.charAt(descriptionIndex);
            descriptionIndex++;
            setTimeout(typeDescription, speed);
        }
    }

    typeTitle(); 
});
