function togglemenu(){
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
// Get references to the body and button
const body = document.body;
const toggleButton = document.getElementById('toggleButton');

// Function to toggle dark mode
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Set initial mode
if (!body.classList.contains('dark-mode')) {
    body.classList.add('light-mode');
}