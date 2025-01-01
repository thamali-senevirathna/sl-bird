// Featured Bird Data
const featuredBirds = [
    {
        name: "Sri Lanka Junglefowl",
        description: "The national bird of Sri Lanka, known for its vibrant plumage and distinctive call.",
        image: "/images/Sri-Lanka-Junglefowl.jpg"
    },
    {
        name: "Serendib Scops Owl",
        description: "A rare endemic species discovered in 2001, found only in Sri Lanka's rainforests.",
        image: "/images/Serendib-Scops-Owl.jpg"
    },
    {
        name: "Sri Lanka Blue Magpie",
        description: "An endemic bird known for its striking blue plumage and long tail.",
        image: "/images/Blue-Magpie.jpg"
    },
    {
        name: "Ceylon Paradise Flycatcher",
        description: "A beautiful endemic species with distinctive long tail streamers.",
        image: "/images/Ceylon-Paradise-Flycatcher.jpg"
    }
];

// Bird Species Data
const birdSpecies = [
    {
        name: "Sri Lanka Junglefowl",
        category: "endemic",
        status: "Least Concern",
        habitat: "Forest",
        image: "/images/Sri-Lanka-Junglefowl.jpg"
    },
    {
        name: "Serendib Scops Owl",
        category: "endemic",
        status: "Endangered",
        habitat: "Rainforest",
        image: "/images/Serendib-Scops-Owl.jpg"
    },
    {
        name: "Greater Flamingo",
        category: "migratory",
        status: "Least Concern",
        habitat: "Wetlands",
        image: "/images/Greater Flamingo.jpg"
    },
    {
        name: "Sri Lanka Wood Pigeon",
        category: "endemic",
        status: "Vulnerable",
        habitat: "Forest",
        image: "/images/Sri Lanka Wood Pigeon.jpg"
    }
];

// Update Featured Bird
function updateFeaturedBird() {
    const featuredBirdCard = document.querySelector('.featured-bird-card');
    const randomBird = featuredBirds[Math.floor(Math.random() * featuredBirds.length)];
    
    featuredBirdCard.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-6">
                <img src="${randomBird.image}" alt="${randomBird.name}" class="img-fluid rounded">
            </div>
            <div class="col-md-6">
                <h3>${randomBird.name}</h3>
                <p>${randomBird.description}</p>
            </div>
        </div>
    `;
}

// Filter Bird Species
function filterBirdSpecies(category) {
    const speciesGrid = document.getElementById('species-grid');
    speciesGrid.innerHTML = '';
    
    const filteredBirds = category === 'all' 
        ? birdSpecies 
        : birdSpecies.filter(bird => bird.category === category);
    
    filteredBirds.forEach(bird => {
        const birdCard = document.createElement('div');
        birdCard.className = 'col-md-4';
        birdCard.innerHTML = `
            <div class="species-card">
                <img src="${bird.image}" alt="${bird.name}">
                <div class="species-card-content">
                    <h4>${bird.name}</h4>
                    <p><strong>Status:</strong> ${bird.status}</p>
                    <p><strong>Habitat:</strong> ${bird.habitat}</p>
                </div>
            </div>
        `;
        speciesGrid.appendChild(birdCard);
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateFeaturedBird();
    filterBirdSpecies('all');
    
    // Add filter button event listeners
    document.querySelectorAll('.species-filters button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.species-filters button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterBirdSpecies(this.dataset.filter);
        });
    });
    
    // Change featured bird every 5 seconds
    setInterval(updateFeaturedBird, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
   const carousel = document.getElementById('myCarousel');
   const items = carousel.querySelectorAll('.carousel-item');
   let currentIndex = 0;
   const totalItems = items.length;

   // Function to show the next slide
   function showNextSlide() {
      items[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalItems;
      items[currentIndex].classList.add('active');
   }

   // Auto-cycle through slides every 3 seconds
   setInterval(showNextSlide, 3000);
});
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    
})(jQuery);


$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });
      

  // Include these scripts at the bottom of the HTML or in a separate JS file
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the date pickers
    new tempusDominus.TempusDominus(document.getElementById('checkin-picker'), {
        display: {
            viewMode: 'calendar',
            components: {
                calendar: true,
                clock: false
            }
        }
    });

    new tempusDominus.TempusDominus(document.getElementById('checkout-picker'), {
        display: {
            viewMode: 'calendar',
            components: {
                calendar: true,
                clock: false
            }
        }
    });
});
