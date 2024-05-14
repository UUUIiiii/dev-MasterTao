$(document).ready(function(){
    $('#first-screen-slider').slick({
            arrows:true,
            dots: true,
            fade:true,
            appendArrows:$('.first-screen-arrows')

        }
    );
    const hamburger = document.querySelector('.hamburger')
    const headerNav = document.querySelector('.header-nav')
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('is-active')
        headerNav.classList.toggle('show')
    })

  });  
  
