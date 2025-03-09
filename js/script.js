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