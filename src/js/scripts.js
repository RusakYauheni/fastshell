(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell

$('.slider').sss({
	slideShow : true, // Set to false to prevent SSS from automatically animating.</span>
	startOn : 0, // Slide to display first. Uses array notation (0 = first slide).</span> 
	transition : 400, // Length (in milliseconds) of the fade transition.</span>
	speed : 3500, // Slideshow speed in milliseconds.</span>
	showNav : true // Set to false to hide navigation arrows.</span>
});

$(document).ready(function(){

    $(".features-header__auto").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

    });

});


  });

})(jQuery, window, document);
