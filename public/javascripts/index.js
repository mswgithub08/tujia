$(function(){
	var num=0;
	var num2=0;
	var timer;
	var bw;

	function gogo(){
		timer=setInterval(()=>{
			num++;
			if(num>2) num=0;
			$('nav a').eq(num).css('z-index', '2');
			$('nav a').eq(num).fadeIn();
			$('nav a').eq(num).siblings('a').css('z-index', '0');
			$('nav a').eq(num).siblings('a').fadeOut();

		},2000)
	}
	gogo();
	$(window).resize(function() {
		$('nav').css('height', $('nav a').eq(0).height());
		
	});
	var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });

	$('.find .like').click(function(event) {
		$(this).toggleClass('like2');
	});

	$('header span').click(function(event) {
		$('.sidebar').show();
	});
	$('.sidebar .s_left span').click(function(event) {
		$('.sidebar').hide();
	});

	$(document).scroll(function(e) {

		$('.enter').css('top',scrollY);
	});

	$('.enter span').click(function(event) {
		$('.enter').css('display', 'none');
	});

	$('.sidebar .s_left .login').click(function(event) {
		$('.sidebar .s_left .nologin').addClass('unshow');
		$('.sidebar .s_left .logined').removeClass('unshow');
	});

	$('.sidebar .s_left .leave').click(function(event) {
		$('.sidebar .s_left .logined').addClass('unshow');
		$('.sidebar .s_left .nologin').removeClass('unshow');
	});

	
})