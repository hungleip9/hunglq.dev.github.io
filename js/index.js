$(document).ready(function($) {
	$('.btn12').on('click', function(){
		var name = $('#Name').val();
		var phone = $('#Phone').val();
		var email = $('#Email').val();
		var diachi = $('#diaChi').val();
		function validateEmail(Email) {
		    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(String(Email).toLowerCase());
		}
		function phonenumber(Phone)
		{
			var re2 = /((09)|(03)|(06)|(08)|(02)+([0-9]{8})\b)/g;
			return re2.test(Phone);
		}
		if ( name == "") {
			$('#erroname').html('bạn chưa nhập đầy đủ tên');
			return;
		}
		else if($('#Name').val().length <= 8){
			$('#erroname').html('bạn phải nhập lớn hơn 8 ký tự');
			return;
		}
		else{
			$('#erroname').html(null);
		}
		if ( phone == "") {
			$('#errophone').html('bạn chưa nhập đầu đủ số phonenumber');
			return;
		}
		else if (!phonenumber(Phone.value)) {
				Phone.nextElementSibling.innerHTML = "yêu câu nhập đúng phonenumber";
				return;
			}
		else{
			$('#errophone').html(null);
		}
		if ( email == "") {
			$('#erroemail').html('bạn chưa nhập đầy đủ email');
		}
		else if (!validateEmail(Email.value)) {
				Email.nextElementSibling.innerHTML = "Yêu cầu nhập đúng định dạng của email";
				return;
		}
		else{
			$('#erroemail').html(null);
		}
		if ( diachi == "") {
			$('#errodiachi').html('Bạn chưa nhập đầy đủ địa chỉ');
		}else{
			$('#errodiachi').html(null);
		}

		if( name && phone && email && diachi){
			$('.info-form').html("Tên bạn là : "+name+"</br>Số điện thoại của bạn là : "+phone+"<br>email của bạn là : "+email+"<br>địa chỉ của bạn là : "+diachi);
			
			
			
		}

		

	});

	$('#box-ct4').mouseenter(function(){
    $('#ct4-icon').addClass('bounceOut');
    $('h2').addClass('tada');

	});
	$('#box-img-ct2').mouseenter(function(){
    $('#box-img-ct2').addClass('tada');
    

    });
    $('#box-ct5').mouseenter(function(){
    $('.img-box-ct5').addClass('tada');	
    });
    $(window).scroll(function(event){
    	var pos_body = $('html,body').scrollTop();
    	if(pos_body>100){
    		$('.back-to-top').addClass('hien-ra');
    	}else{
    		$('.back-to-top').removeClass('hien-ra');
    	}
    	
    });
    $('.back-to-top').click(function(){
    	$('html, body').animate({scrollTop : 0}, 800);
    });
      
$('a[href*="#"]')
  // Remove links that don't actually link to anything
			  .not('[href="#"]')
			  .not('[href="#0"]')
			  .click(function(event) {
			    // On-page links
			    if (
			      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			      && 
			      location.hostname == this.hostname
			    ) {
			      // Figure out element to scroll to
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			      // Does a scroll target exist?
			      if (target.length) {
			        // Only prevent default if animation is actually gonna happen
			        event.preventDefault();
			        $('html, body').animate({
			          scrollTop: target.offset().top
			        }, 1000, function() {
			          // Callback after animation
			          // Must change focus!
			         // var $target = $(target);
			         // $target.focus();
			         //  if ($target.is(":focus")) { // Checking if the target was focused
			         //    return false;
			         //  } else {
			         //    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			         //    $target.focus(); // Set focus again
			         //  };
			        });
			      }	
			    }
			  });
			  $('.mau-nen').mouseenter(function(){
			  	$('.mau-1').addClass('mau-hien-ra');
			  	$('.mau-2').addClass('mau-hien-ra');
			  	$('.mau-3').addClass('mau-hien-ra');
			  	$('.mau-4').addClass('mau-hien-ra');
			  	$('.mau-5').addClass('mau-hien-ra');
			  });
			  $('.mau-nen').mouseleave(function(){
			  	$('.mau-1').removeClass('mau-hien-ra');
			  	$('.mau-2').removeClass('mau-hien-ra');
			  	$('.mau-3').removeClass('mau-hien-ra');
			  	$('.mau-4').removeClass('mau-hien-ra');
			  	$('.mau-5').removeClass('mau-hien-ra');
			  });
			  $('.mau-1').click(function() {
			  	$('body').css("background-color", "black");
			  	$('body').css("color", "white");
			  });
			  $('.mau-2').click(function() {
			  	$('body').css("background-color", "#99FFFF");
			  	$('body').css("color", "black");
			  });
			  $('.mau-3').click(function() {
			  	$('body').css("background-color", "#990099");
			  	$('body').css("color", "white");
			  });
			  $('.mau-4').click(function() {
			  	$('body').css("background-color", "#99FF00");
			  	$('body').css("color", "black");
			  });
			  $('.mau-5').click(function() {
			  	$('body').css("background-color", "white");
			  	$('body').css("color", "black");
			  });
			  $('.ct11-box-img').isotope({
      			itemSelector: '.all'
      		});
			  $('ul li').click(function(event) {
			  	
			  	var type = $(this).data('type');
			  	

			  	type = '.'+type;
			  	$('.ct11-box-img').isotope({
			  		filter:type
			  	});
			  });

});
