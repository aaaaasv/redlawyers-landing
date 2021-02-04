$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  checkvisible: false,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    },
    1500: {
      items: 5
    }
  }
})

$('.icon-viber').on('click', function() {
  $(this).siblings('input.viber-copy').select();
  document.execCommand("copy")
  $(this).attr('title', 'Скопійовано').tooltip('_fixTitle').tooltip('show');
})

$('.icon-social').mouseleave(function() {
  if ($(this).attr('title') !== 'Натисніть, щоб скопіювати') {
    $(this).attr('title', 'Натисніть, щоб скопіювати').tooltip('_fixTitle').tooltip('show');
  }
})
$('.icon-social').hover(function() {
  $(this).tooltip('show');
})
$('.icon-whatsup').on('click', function() {
  $(this).siblings('input.whatsup-copy').select();
  document.execCommand("copy")
  $(this).attr('title', 'Скопійовано').tooltip('_fixTitle').tooltip('show');
})
