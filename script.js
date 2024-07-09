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




document.addEventListener("DOMContentLoaded", function() {
    const reviewData = [
        { stars: 5, percentage: 75 },
        { stars: 4, percentage: 50 },
        { stars: 3, percentage: 30 },
        { stars: 2, percentage: 90 },
        { stars: 1, percentage: 20 }
    ];

   const mainContainer = document.querySelector('.main_container_reviewRate_right');
   reviewData.forEach((review,index)=>{
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('main_container_reviewRate_right_singleReview');
    
    const starSpan = document.createElement('span');
        starSpan.textContent = `${review.stars} stars`;
    
    const backBar = document.createElement('div');
        backBar.classList.add('main_container_reviewRate_right_backBar');
  
    const topBar = document.createElement('div');
        topBar.classList.add('main_container_reviewRate_right_TopBar');
        topBar.style.width = (review.percentage / 100) * 245 + 'px';

        const percentageSpan = document.createElement('span');
        percentageSpan.id = `percentage-${index}`;
        percentageSpan.setAttribute('percentage', review.percentage);
        percentageSpan.textContent = `${review.percentage}%`;

        backBar.appendChild(topBar);
        reviewContainer.appendChild(starSpan);
        reviewContainer.appendChild(backBar);
        reviewContainer.appendChild(percentageSpan);

        mainContainer.appendChild(reviewContainer);    
})

});




document.addEventListener("DOMContentLoaded", function() {
    const comments = [
        { title: 'Advantages', context: 'Color, Size'},
        { title: 'Disadvantages', context: '-'},
        { title: 'Review', context: 'What sets 5 Star Cloth apart from other brands is their ability to create timeless pieces that never go out of style. Their designs are sophisticated and elegant, catering to individuals who appreciate refined fashion. Whether its a formal event or a casual outing, their clothing effortlessly elevates any ensemble.' }
     
    ];
    const reviewContainer = document.querySelector('.main_container_reviewComment_bottom');
    comments.forEach((comments, index) => {
        const review = document.createElement('div');
        review.classList.add('main_container_reviewComment_bottom_content');
        const left =document.createElement('div');
        left.classList.add('main_container_reviewComment_bottom_content_left');
        
        const titlespan =document.createElement('span');
        titlespan.textContent=comments.title;

        const right=document.createElement('div');
        right.classList.add('main_container_reviewComment_bottom_content_right');

        const contextspan=document.createElement('span');
        contextspan.textContent=comments.context;

        reviewContainer.appendChild(review)
        review.appendChild(left)
        review.append(right)
        left.appendChild(titlespan)
        right.append(contextspan)


    })
}); 



document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});
