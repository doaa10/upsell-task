document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname.split('#')[0].split('?')[0];
    console.log("Current location:", currentLocation);
    
    const menuItem = document.querySelectorAll('.main_container_nav a');
    menuItem.forEach(link => {
        console.log("Link pathname:", link.pathname.split('#')[0].split('?')[0]);
        if (link.pathname.split('#')[0].split('?')[0] === currentLocation) {
            link.classList.add("active");
            console.log("Active class added to:", link.href);
            console.log(link)
        }
    });
});
