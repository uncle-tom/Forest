$( document ).ready(function() {

// PRELOADER //
  $(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

//SWIPER //
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
    });

// HEADER //

 	$('.adress_nav_link').click(function(){ 
    swiper.slideTo(1);
    
    });

 	$('.price_nav_link').click(function(){ 
   	swiper.slideTo(2);
    $('.media').css('background', 'green')
 	});

  	$('.sale_nav_link').click(function(){ 
  	swiper.slideTo(3);
  	});
  
  	$('.sert_nav_link').click(function(){ 
  	swiper.slideTo(4);
  	});

  	$('.question_nav_link').click(function(){ 
  	swiper.slideTo(5);
  	});

  	$('.callback_link').click(function(){ 
  	swiper.slideTo(6);
  	});

  	$('.rooms_nav_link').click(function(){ 
  	swiper.slideTo(0);
  	});

// NICE FORM //

 var $input = $('input');
     
  $(document).on('keyup','input',function(){
    var $inputTitle = $(this).parent().find('span');
    $inputTitle.addClass('active');
    if($(this).val().length == 0){
      $inputTitle.removeClass('active complete');
    }
  });
  $(document).on('focus','input',function(){
    var $inputTitle = $(this).parent().find('span');
    $inputTitle.removeClass('complete');
  });
  $(document).on('blur','input',function(){
    var $inputTitle = $(this).parent().find('span');
    $inputTitle.removeClass('active');
    
    if($(this).val().length > 0){
      $inputTitle.addClass('active complete');
    }
    if($(this).val().length == 0){
      $inputTitle.removeClass('active complete');
    }
  });

     

});

 