jQuery.noConflict();

jQuery(document).ready(function($){
  var $theWindow   = $(window),
      $bg          = $('#bg'),
      aspectRatio  = $bg.width() / $bg.height(),
      $mainUl      = $('.main-content ul');

  function resizeBg(){
    // if(($theWindow.width()/$theWindow.height()) < aspectRatio){
    //   $bg.removeClass().addClass('bgheight');
    // } else {
    //   $bg.removeClass().addClass('bgwidth');
    // }
  }

  function resizeElements(){
    var mainCon       = $('.span9').width(),
        sideCon       = $('.span3').width();
        $si_height    = $('.span3 ul li img').height();

    $('.span9 ul li').css('width', mainCon-10);
    $('.span9 ul li img').css('width', mainCon-20);
    // $('.span3 ul li img').css('right', -sideCon);
  }

  $theWindow.resize(function(){
    resizeBg();
    resizeElements();
  }).trigger("resize");

  $('.span3 ul li').on({
    mouseenter: function(){
      var $img           = $(this).children('img');
      var sideConWidth   = $('.span3').width();

      $(this).animate({
        'left': '5px'
      }, 200, function(){
        
      });
      if ($(this).hasClass('active') === false) {
        $img.stop(true, true).animate({
          opacity: 1,
          'right': '5px'
        }, 400);
      }
    },
    mouseleave: function(){
      var sideConWidth2   = $('.span3').width();
      var $img = $(this).find('img');
      var $that = $(this);

      if( $that.hasClass('active') === false ){
        $(this).stop(true, true).animate({
          'left': '0'
        }, 200, function(){
          
        });
        $img.stop(true, true).animate({
          opacity: 0,
          'right': '-60px'
        }, 400);
      }

      $bg.stop(true,true);
    },
    click: function(){
      var bg_id = $(this).data('id'),
          mainCon = $('.span9').width(),
          margin = (bg_id-1) * -(mainCon),
          $that = $(this),
          sideConWidth3   = $('.span3').width(),
          mainimageheight = $(".main-content ul li[data-id='" + bg_id +"'] img").height(),
          heights = [],
          totalimgheight = 0,
          totalimg = $(".main-content ul li[data-id='" + bg_id +"'] > img").size();
          // url = "http://portfolio.dev/"+bg_id;
        
      window.location.hash = '#words';

      // Main content height codez
      $(".main-content ul li[data-id='" + bg_id +"'] img").each(function(val){
        heights[val] = ($(this).height());
      });
      
      for(var i in heights) { totalimgheight += heights[i]; }
      $(".main-content ul li[data-id='" + bg_id +"'], .span9").css('height', totalimgheight+(20*totalimg+100));
      
      // Slider animation codez
      $mainUl.animate({'margin-left': margin+'px'}, 1100);
      
      // Desription div fade-in/fade-out code
      $("#description-content p, .scrolltop").animate({
            opacity: 0
          }, 500, function(){
            // $("#description-content p").remove();
            $("#description-content").html($that.data('text'));
            $("#description-content p, .scrolltop").animate({
              opacity: 1
            }, 500);
          });

      $('.span3 ul li').each(function(){
        $(this).removeClass('active');
        
        $that.addClass('active');
        
        if($(this).hasClass('active') !== true){
          $(this).stop(true, true).animate({
          'left': '0'
          }, 200);
          $(this).find('img').stop(true, true).animate({
            opacity: 0,
            'right': '-60px'
          }, 400);
        }
      });

      // Change Background Image Codez
      $that.find('img.bg').animate({
        'opacity': 0
      }, 500);

      $bg.animate({
        'opacity': 0.06
      }, 1000, function(){
        $(this).attr('src', 'assets/bg/'+bg_id+'.jpg').css('opacity', 0);
      }).animate({
        'opacity': 0.6
      }, 3000);
    }
  });

  // Description Fixed Position Codez
  var fixedes = $(".description"),
      fixedes_pos = fixedes.offset();

  $(window).scroll(function(){
    if ($(this).scrollTop() > fixedes_pos.top){
      fixedes.addClass('fixed');
      fixedes.css('width', $('.span3').width() );
    } else if ( fixedes.hasClass('fixed') === true && $(this).scrollTop() < fixedes_pos.top) {
      fixedes.removeClass('fixed');
    }
  });

  //Scroll to top of page Codez
  $('.scrolltop').on('click', function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});



















