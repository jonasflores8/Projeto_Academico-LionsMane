$( document ).ready(function(){
  
  // scroll para as seções
  let navBtn = $('.nav-item');

  let bannerSection = $('#mainCarousel');
  let functionSection = $('#function-area');
  let calvicieSection = $('#calvicie-area');
  let productSection = $('#products-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function(){

    let btnId = $(this).attr('id');

    if(btnId == 'home-menu'){
      scrollTo = bannerSection;
    } else if(btnId == 'function-menu'){
      scrollTo = functionSection;
    } else if(btnId == 'calvicie-menu'){
      scrollTo = calvicieSection;
    } else if(btnId == 'products-menu'){
      scrollTo = productSection;
    } else if(btnId == 'contact-menu'){
      scrollTo = contactSection;
    } else{
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });
});