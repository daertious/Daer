$(document).ready(function(){
    $("#preloader").fadeOut(1000);
});
// SCROLL MENU
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;       
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
// END SCROLL MENU

// TEXT TYPE
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// END TEXT TYPE

//SOUND PLAYER
function Play()
    {
        var myMusic = document.getElementById("music");
        if(myMusic.paused)
        {
            myMusic.play();
            //document.getElementById("play").innerHTML="Pause";
            window.open('egg.html');
		music.classList.add("hidden");
      		music.classList.remove("visibility");
        }
        else
        {
            myMusic.pause();
            //document.getElementById("Pause").innerHTML="Play";
        }
    }
//END SOUND PLAYER

//EASTER EGG
document.addEventListener('DOMContentLoaded', function() {
    var showMusic = document.getElementById('showMusic');
    var music = document.getElementsByClassName("music")[0];
    console.log(music.className);
  
    showMusic.addEventListener('click', function(e) {
      e.preventDefault();
      music.classList.remove("hidden");
      music.classList.add("visibility");
      console.log(music.className)
	    music.classList.remove("music");
    });  
});
//END EASTER EGG

$(function(){

	$('#dt1').hide();
	$('#dt2').hide();
	$('#dt3').hide();
	$('#dt4').hide();
	$('#dt5').hide();
	$('#dt6').hide();
	$('#dt7').hide();
	$('#dt8').hide();
	$('#dt9').hide();
	$('#dt10').hide();
	$('#dt11').hide();
	$('#dt12').hide();
	$('#dt13').hide();
	$('#dt14').hide();
	$('#dt15').hide();
	$('#dt16').hide();
	$('#dt17').hide();
	$('#dt18').hide();
	$('#dt19').hide();

    setTimeout(function(){
        $('#dt1').fadeIn('slow');
	},3000);
	setTimeout(function(){
		$('#dt1').fadeOut('slow');
		$('#dt1').hide();
    },5000);

	setTimeout(function(){
        $('#dt2').fadeIn('slow');
	},5000);
	setTimeout(function(){
		$('#dt2').fadeOut('slow');
		$('#dt2').hide();
    },10000);

	setTimeout(function(){
        $('#dt3').fadeIn('slow');
	},10000);
	setTimeout(function(){
		$('#dt3').fadeOut('slow');
		$('#dt3').hide();
    },14000);

	setTimeout(function(){
        $('#dt4').fadeIn('slow');
	},14000);
	setTimeout(function(){
		$('#dt4').fadeOut('slow');
		$('#dt4').hide();
	},20000);

	setTimeout(function(){
        $('#dt5').fadeIn('slow');
	},20000);

});

// CHOICE 1

$('#dt5_choice1').click(function () {

	setTimeout(function(){
		$('#dt5').fadeOut('slow');
		$('#dt5').hide();
	},1000);

	setTimeout(function(){
        $('#dt6').fadeIn('slow');
	},1000);
	setTimeout(function(){
		$('#dt6').fadeOut('slow');
		$('#dt6').hide();
	},5000);

	setTimeout(function(){
        $('#dt7').fadeIn('slow');
	},5000);
	setTimeout(function(){
		$('#dt7').fadeOut('slow');
		$('#dt7').hide();
	},10000);

	setTimeout(function(){
        $('#dt8').fadeIn('slow');
	},10000);
	setTimeout(function(){
		$('#dt8').fadeOut('slow');
		$('#dt8').hide();
	},14000);

	setTimeout(function(){
        $('#dt9').fadeIn('slow');
	},14000);
	setTimeout(function(){
		$('#dt9').fadeOut('slow');
		$('#dt9').hide();
	},19000);

	setTimeout(function(){
        $('#dt10').fadeIn('slow');
	},19000);
	setTimeout(function(){
		$('#dt10').fadeOut('slow');
		$('#dt10').hide();
		close();
	},24000);

});

// CHOICE 2

$('#dt5_choice2').click(function () {

	setTimeout(function(){
		$('#dt5').fadeOut('slow');
		$('#dt5').hide();
	},1000);

	setTimeout(function(){
        $('#dt11').fadeIn('slow');
	},1000);
	setTimeout(function(){
		$('#dt11').fadeOut('slow');
		$('#dt11').hide();
	},4000);

	setTimeout(function(){
        $('#dt12').fadeIn('slow');
	},4000);
	setTimeout(function(){
		$('#dt12').fadeOut('slow');
		$('#dt12').hide();
	},8000);

	setTimeout(function(){
        $('#dt13').fadeIn('slow');
	},8000);
	setTimeout(function(){
		$('#dt13').fadeOut('slow');
		$('#dt13').hide();
	},12000);

	setTimeout(function(){
        $('#dt14').fadeIn('slow');
	},12000);
	setTimeout(function(){
		$('#dt14').fadeOut('slow');
		$('#dt14').hide();
	},16000);

	setTimeout(function(){
        $('#dt15').fadeIn('slow');
	},16000);
	setTimeout(function(){
		$('#dt15').fadeOut('slow');
		$('#dt15').hide();
	},20000);

	setTimeout(function(){
        $('#dt16').fadeIn('slow');
	},20000);
	setTimeout(function(){
		$('#dt16').fadeOut('slow');
		$('#dt16').hide();
	},24000);

	setTimeout(function(){
        $('#dt17').fadeIn('slow');
	},24000);
	setTimeout(function(){
		$('#dt17').fadeOut('slow');
		$('#dt17').hide();
	},28000);

	setTimeout(function(){
        $('#dt18').fadeIn('slow');
	},28000);
	setTimeout(function(){
		$('#dt18').fadeOut('slow');
		$('#dt18').hide();
	},32000);

	setTimeout(function(){
        $('#dt19').fadeIn('slow');
	},32000);
	setTimeout(function(){
		$('#dt19').fadeOut('slow');
		$('#dt19').hide();
		close();
	},35000);
});
