document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname.split('#')[0].split('?')[0];
    console.log("Current location:", currentLocation);
    
    const menuItem = document.querySelectorAll('.main_container_nav a');
    menuItem.forEach(link => {
        if (link.pathname.split('#')[0].split('?')[0] === currentLocation) {
            link.classList.add("active");
            console.log(link)
        }
    });


    const starContainer = document.getElementById('stars-container');
    const rating = parseFloat(starContainer.getAttribute('data-rating'));
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
        const star = document.createElement('i');
        star.classList.add('fas');
        if (i < Math.floor(rating)) {
            star.classList.add('fa-star'); 
        } else if (i < rating) {
            star.classList.add('fa-star-half-alt'); 
        } else {
            star.classList.add('fa-star'); 
            star.style.color = '#D3D3D3'; 
        }
        starContainer.appendChild(star);
    }
});