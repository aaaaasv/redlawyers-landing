$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayHoverPause: true,
    checkvisible:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1500:{
            items:5
        }
    }
})

$('.icon-telegram').on('click', function() {
  $(this).siblings('input.telegram-copy').select();
  document.execCommand("copy")
  $(this).attr('title', 'Скопійовано').tooltip('_fixTitle').tooltip('show');
})

$('.icon-telegram').mouseleave(function() {
  $(this).attr('title', 'Натисніть, щоб скопіювати').tooltip('_fixTitle');

})
