/* Scroll */

var lastScrollT = 0,
	header = $('body').find('header');

$(window).scroll(function(event){
	var scrollT = $(this).scrollTop();
	if (scrollT > lastScrollT){
    	header.addClass("headerUp");
    	toggleNav.css({height: "0px"}).hide();
	}
	else {
		header.removeClass("headerUp");
	}
	lastScrollT = scrollT;

});

var hideyourself = $('.aboutpavel').offset().top-350;

$(window).scroll(function(event){
	if ($(this).scrollTop()>hideyourself) $('.photonav').hide();
	else $('photonav').show();

});
$(window).scroll(function(event){
	if ($(this).scrollTop()<hideyourself) $('.photonav').show();
});
var toggleNav = $('.toggleNav');
	
toggleNav.css({height: "0px"}).hide();


$('#menuButton').on('click', function(event){
	
	if (toggleNav.css('height') === "0px" ) {
		toggleNav.show()
				 .animate({height: "63.2px"}, 200);
		$('html,body').animate({ scrollTop: $(this).offset().top-"37" });
	} 
	else	{
		toggleNav.animate({height: "0px"}, 200)
				 .fadeOut(1);
	};
	event.preventDefault();
});

/* Photo Slider */

var	li = $('.photos').find('li'),
	removeid = $('.photonav').find('i');

$('.im1').attr('id', 'black');

$('.im1').on('click', function(){
	removeid.removeAttr('id', 'black');
	$(this).attr('id', 'black');
	li.animate({top: "0vh"},500, "swing");

});

$('.im2').on('click', function(){
	removeid.removeAttr('id', 'black');
	$(this).attr('id', 'black');
	li.animate({top: "-100vh"},500, "swing");
});

$('.im3').on('click', function(){
	removeid.removeAttr('id', 'black');
	$(this).attr('id', 'black');
	li.animate({top: "-200vh"},500, "swing");
});

$('.im4').on('click', function(){
	removeid.removeAttr('id', 'black');
	$(this).attr('id', 'black');
	li.animate({top: "-300vh"},500, "swing");
});

/* ScrollTop */

$('.scrolltop').find('a').on('click', function(event){
	$('html,body').animate({
		scrollTop: 0
	}),
	event.preventDefault();
});

/* Gallery */
 

var photonumber,
	overlay = $('.overlay'),
	overlay2 = $('.overlay2'),
	k,l,a;
	a=1;
	a=parseInt(a);


$('.gallery').find('li').on('click', function(){
	overlay.show();
	overlay2.show();
	var thisimg = $(this).find('img');
		photonumber = $(this);

		if (thisimg.hasClass('imgUp')== false) {
			thisimg.parent().clone(true).insertBefore($(this));
			thisimg.addClass("imgUp");
			l = photonumber.attr('class').substr(5,2);
 			k = parseInt(l);
 				

 				$('.hidden').attr({value: k});


 // responsive 
 
 var winh = $(window).height()*0.21;
	var imguph = $('.imgUp').height()+winh;
	$('.comentary').css({top: imguph});
	var imgh = ($('.imgUp').height()/2)+winh;
	$('.right').css({top: imgh});
	$('.left').css({top: imgh});

				
//komentar

	$('.komentare').empty();
	$.ajax({ method: "GET", url: "./assets/database/connjq.php", })
    
        .done(function( data ) { 
          var result = JSON.parse(data); 

          var string;
				var username = $('.username').text();    
        $.each( result, function( key, value ) { 
             if (value['id_obrazka']== k) {
             	if (username == 'admin') {
             		string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else if (username == value['name']) {
						string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else {

             string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'</p><hr></div>'; 
             	}
          $('.komentare').append(string); 
          a = a+1;
         	}
         }); 

        
 
       });

				}
});
var countimg = $('article').attr('class'),
	countImg = parseInt(countimg);
	countImg = countImg-1;

$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
       photonumber.find('img').unwrap().remove();
	overlay.hide();
	overlay2.hide(); 
    }		
    else if (e.keyCode == 37)	{
    	k=k-1;	
	if (k<0) {k=countImg};
	var	nextSrc = $('.photo'+k).find('img').attr('src');
 	photonumber.find('img').attr('src', nextSrc);
 	$('.hidden').attr({value: k});
 	console.log(k);

//komentar

	$('.komentare').empty();
	$.ajax({ method: "GET", url: "./assets/database/connjq.php", })
    
        .done(function( data ) { 
          var result = JSON.parse(data); 

          var string;
      
        var username = $('.username').text();    
        $.each( result, function( key, value ) { 
             if (value['id_obrazka']== k) {
             	if (username == 'admin') {
             		string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else if (username == value['name']) {
						string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else {

             string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'</p><hr></div>'; 
             	}
          $('.komentare').append(string); 
         		a=a+1;
         	}
         }); 

        
 
       });

    }
    else if (e.keyCode == 39) {
    	k=k+1;	
	if (k>countImg) {k=0};
	var	nextSrc = $('.photo'+k).find('img').attr('src');
 	photonumber.find('img').attr('src', nextSrc);
 	console.log(k);
 		$('.hidden').attr({value: k});
    //komentar

	$('.komentare').empty();
	$.ajax({ method: "GET", url: "./assets/database/connjq.php", })
    
        .done(function( data ) { 
          var result = JSON.parse(data); 

          var string;
 var username = $('.username').text();    
        $.each( result, function( key, value ) { 
             if (value['id_obrazka']== k) {
             	if (username == 'admin') {
             		string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else if (username == value['name']) {
						string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else {

             string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'</p><hr></div>'; 
             	}
          $('.komentare').append(string); 
          a=a+1;
         	}
         }); 

        
 
       });
    }
});
$('.close').on('click', function(){
	photonumber.find('img').unwrap().remove();
	overlay.hide();
	overlay2.hide();
});
 	console.log($('article').attr('class'));
 	
$('.right').on('click', function(){
	
	
	k=k+1;	
	if (k>countImg) {k=0};
	var	nextSrc = $('.photo'+k).find('img').attr('src');
 	photonumber.find('img').attr('src', nextSrc);
 	//komentar

	$('.komentare').empty();
	$.ajax({ method: "GET", url: "./assets/database/connjq.php", })
    
        .done(function( data ) { 
          var result = JSON.parse(data); 

          var string;
      
         var username = $('.username').text();    
        $.each( result, function( key, value ) { 
             if (value['id_obrazka']== k) {
             	if (username == 'admin') {
             		string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else if (username == value['name']) {
						string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else {

             string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'</p><hr></div>'; 
             	}
          $('.komentare').append(string);
          a= a+1; 
         	}
         }); 

        
 
       });

	});
		$('.hidden').attr({value: k});



$('.left').on('click', function(){
	
	
	k=k-1;	
	if (k<0) {k=countImg};
	var	nextSrc = $('.photo'+k).find('img').attr('src');
 	photonumber.find('img').attr('src', nextSrc);
 	console.log(k);
 		$('.hidden').attr({value: k});
//komentar

	$('.komentare').empty();
	$.ajax({ method: "GET", url: "./assets/database/connjq.php", })
    
        .done(function( data ) { 
          var result = JSON.parse(data); 

          var string;
      var username = $('.username').text();    
        $.each( result, function( key, value ) { 
             if (value['id_obrazka']== k) {
             	if (username == 'admin') {
             		string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else if (username == value['name']) {
						string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'<a onclick="document.myform'+a+'.submit()" href="#"> vymazat</a><form style="float: right;" name="myform'+a+'" action="deletecomment.php" method="get"><input type="hidden" name="komentarik" value="'+value['ID']+'"></form></p><hr></div>';

             	} else {

             string = '<div class="coment"><p><strong>'+value['name']+'</strong> &nbsp;'+value['text']+'</p><hr></div>'; 
             	}
          $('.komentare').append(string); 
          a=a+1;
         	}
         }); 

        
 
       });
	});

// responsive 


$(window).resize(function() {
	var winh = $(window).height()*0.21;
	var imguph = $('.imgUp').height()+winh;
	$('.comentary').css({top: imguph});
	var imgh = ($('.imgUp').height()/2)+winh;
	$('.right').css({top: imgh});
	$('.left').css({top: imgh});
});

$(document).ready(function() {
	var vyska = $('.aboutpavel').height()+$('.news').height();
	$('.responsive').css({height: vyska});
	console.log(vyska);
})
