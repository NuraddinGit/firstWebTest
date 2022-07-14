$(document).ready(function () {
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change')
  })

  $(window).scroll(function () {
    let pos = $(this).scrollTop()
    let srl_pos = $(window).scrollTop()

    $('header').css({
      'background-position-y': srl_pos / 10 - 60 + 'px',
    })

    if (pos >= 200) {
      $('.nav-menu').addClass('custom-navbar')
    } else {
      $('.nav-menu').removeClass('custom-navbar')
    }
  })

  $('.gallery-list-item').click(function () {
    let value = $(this).attr('data-filter')
    if (value === 'all') {
      $('.filter').show(30)
    } else {
      $('.filter')
        .not('.' + value)
        .hide(30)
      $('.filter')
        .filter('.' + value)
        .show(30)
    }
  })
  $('.gallery-list-item').click(function () {
    $(this).addClass('active-item').siblings().removeClass('active-item')
  })
})
