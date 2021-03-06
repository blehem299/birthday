
$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.contain').fadeIn('fast');
});
$('document').ready(function(){
		// var vw;
		// $(window).resize(function(){
		// 	 vw = $(window).width()/2;
		// 	$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		// 	$('#b11').animate({top:240, left: vw-350},500);
		// 	$('#b22').animate({top:240, left: vw-250},500);
		// 	$('#b33').animate({top:240, left: vw-150},500);
		// 	$('#b44').animate({top:240, left: vw-50},500);
		// 	$('#b55').animate({top:240, left: vw+50},500);
		// 	$('#b66').animate({top:240, left: vw+150},500);
		// 	$('#b77').animate({top:240, left: vw+250},500);
		// });

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('blue_g');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow').css('display','inline-block');
		});
	});
	
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('blue_g-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow').css('display','inline-block');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow').css('display','inline-block');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow').css('display','inline-block');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow').delay(3000);
		$('.bannar').fadeOut('slow').delay(3000).css('display','none');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow').css('display','inline-block');
		});
	});

	$('#light_candle').click(function(){
		$('.flame').fadeIn('slow').css('visibility','visible');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow').css('display','inline-block');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow').css('display','inline-block');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow').delay(1000);
		$('.text-jalan').fadeIn('slow').delay(1000).promise().done(function()
		{
			var app = document.getElementById('judul');

			var typewriter = new Typewriter (app, {
				loop : true
			});
			
			typewriter.pauseFor(2000)
				.typeString('Selamat Ulang Tahun yang ke-19 yahh Diankuu :)')
			    .pauseFor(2000)
			    .deleteAll()
			    .typeString('Waktu terus berjalan, belajarlah dari masa lalu, dan jangan terlalu larut dalam kesedihan :)')
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString('Semoga apa yang kamu inginkan tercapai yahh dian terutama mimpi kamu')
			    .pauseFor(100)
			    .deleteAll()
			    .typeString("Mimpi untuk dapat membahagiakan orang tua kamu dan meninggikan derajat mereka :')")
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString("Semoga juga ditahun ini kamu dapat mendapatkan kebahagiaan yang sesungguhnya :')")
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString("Maaf atas semua kesalahan aku ke kamu dian aku ngga akan mau nyakitin kamu lagi aku janji :')")
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString("Aku sekarang mencoba untuk lebih memahami kamu dian dan akan merubah sikap aku juga :')")
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString("Maaf yah dian cuma ini yang bisa aku kasih buat kamu :'(")
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString("Aku buat ini tulus buat kamu dian sebagai ungkapan spesial aku buat kamu :)")
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString("Dan terakhir ...")
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString("Aku minta maaf atas semua kebodohan aku :'(, aku harap kamu bisa nerima aku lagi sepenuhnya")
			    .pauseFor(1000)
			    .deleteAll()
			    .typeString("Aku sayang kamu diann :')")
			    .pauseFor(1000)
			    .deleteAll()
			    .start();
		});
		// $('.cake').fadeOut('fast').promise().done(function(){
		// 	$('.message').fadeIn('slow');
		// });
		
		// var i;

		// function msgLoop (i) {
		// 	$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
		// 	i=i+1;
		// 	$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
		// 	if(i==50){
		// 		$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
		// 			$('.cake').fadeIn('fast');
		// 		});
				
		// 	}
		// 	else{
		// 		msgLoop(i);
		// 	}			

		// });
		// 	// body...
		// }
		
		// msgLoop(0);
		
	});
});
