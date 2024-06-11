const isSticky = () => window.scrollY > 25;
const navbar = document.querySelector('.navbar');
const makeSticky = () => {
  if (isSticky()) {
    navbar.classList.add('is-sticky');
  } else {
    navbar.classList.remove('is-sticky');
  }
};
makeSticky();
window.addEventListener('scroll', () => {
  makeSticky();
});


(function ($) {
  // MENU
  $('.navbar-collapse a').on('click', () => {
    $(".navbar-collapse").collapse('hide');
  });

  const scrollToDiv = (element, navHeight) => {
    const offset = element.offset();
    const offsetTop = offset.top;
    const totalScroll = offsetTop - navHeight;

    $('body,html').animate({
      scrollTop: totalScroll
    }, 300);
  };

  const isScrollIntoView = (elem, index) => {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();
    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(window).height() * .5;
    if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
      $(elem).addClass('active');
    }
    if (!(elemBottom <= docViewBottom)) {
      $(elem).removeClass('active');
    }
    const MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
    const MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height() * .5;
    $(MainTimelineContainer).find('.inner').css('height', MainTimelineContainerBottom + 'px');
  };

  // CUSTOM LINK
  $('.smoothscroll').click(function(){
    const el = $(this).attr('href');
    const elWrapped = $(el);
    const header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;
  });

  const timeline = $('#vertical-scrollable-timeline li');
  $(window).on('scroll', function(){
    Array.from(timeline).forEach(isScrollIntoView);
  });

})(window.jQuery);
