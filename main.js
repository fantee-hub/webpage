$(document).ready(function(){

$('.navbar-nav li a').addClass('border-animation')

// button animation
$('.btn-sub1').hover(
  function(){
    $('.fa-angle-right').css({"transform":"rotate(180deg)",
    "margin-left": "5px"})
  },
  function(){
    $('.fa-angle-right').css({"transform":"rotate(0deg)","margin-left":"0px"})
  }
);

$('.btn-sub2').hover(
  function(){
    $('.fa-angle-double-right').css({"transform":"rotate(180deg)", "margin-left": "5px"})
  },
  function(){
    $('.fa-angle-double-right').css({"transform":"rotate(0deg)","margin-left": "0px"})
  }
);

 // feature icons animation
 $('.content-1 .col-md-4 .circle').hover(
   function(){
    $(this).css({"width":"105px", "height":"105px","color":"#3f494c"})
   },
   function(){
    $(this).css({"width":"100px", "height":"100px","color":"#ef233c"})
   }
 )

 // progress bar animation
 const x =854;
 const y= 672;
 $(window).on("scroll",function(){
    //var scrollh=$(document).height();
    var scrollt=$(document).scrollTop();

    if(x < scrollt){
      $('.pro-1').css("width","90%")
      $('.pro-2').css("width","94%")
      $('.pro-3').css("width","89%")
    }else if( y > scrollt){
      $('.pro-1,.pro-2,.pro-3').css('width', '0%')
    }


    //$('.progress .sp-1').text(scrollh);
    //$('.progress .sp-2').text(scrollt);
 })

 // pricing section
 var basic_span=" .basic .basic-border:nth-child";
 $('.basic a').hover(
   function(){
    $(basic_span +'(1)').css(
      {"width":"100%"})
      $(basic_span + '(2)').css(
        {"height":"100%"})
      $(basic_span + '(3)').css(
        {"height":"100%"})
      $(basic_span + '(4)').css(
        {"width":"100%"})
      $('.basic hr').css("background-color","red")
   },function(){
    $(basic_span +'(1)').css(
      {"width":"30px"})
      $(basic_span + '(2)').css(
        {"height":"30px"})
      $(basic_span + '(3)').css(
        {"height":"30px"})
      $(basic_span + '(4)').css(
        {"width":"30px"})
        $('.basic hr').css("background-color","inherit")
   }
 );

 var enterprise_span =".enterprise .basic-border:nth-child";
 $('.enterprise a').hover(
   
   function(){
    $(enterprise_span + '(1)').css("width","100%")
    $(enterprise_span + '(2)').css("height","100%")
    $(enterprise_span + '(3)').css("height","100%")
    $(enterprise_span + '(4)').css("width","100%")
    $('.enterprise hr').css("background-color","red")
   },function(){
    $(enterprise_span + '(1)').css("width","30px")
    $(enterprise_span + '(2)').css("height","30px")
    $(enterprise_span + '(3)').css("height","30px")
    $(enterprise_span + '(4)').css("width","30px")
    $('.enterprise hr').css("background-color","inherit")
   }
 )

 var pro_plan = ".pro .pro-span:nth-child"
 $('.pro #pro-button').hover(
   function(){
    $(pro_plan + '(1)').css({"height":"100%", "bottom":"0%"})
    $(pro_plan + '(2)').css({"height":"100%", "bottom":"0%"})
    $('.high hr').css("background-color","red")
   },function(){
    $(pro_plan + '(1)').css({"height":"130px", "bottom":"40%"})
    $(pro_plan + '(2)').css({"height":"130px", "bottom":"40%"})
    $('.high hr').css("background-color","inherit")
   }
 )


 // our services
 $('.content-4 .nav-tabs:nth-child(1)').css(
   {"background-color":"#ffffff",
    "border-top": "3px solid #e30022"  
  }
 );
 // focus in for tab 1
 $('.content-4 .nav-tabs:nth-child(1)').on('focusin', function(){
   $(this).css({
     "background-color": "#ffffff",
     "border-top":"3px solid #e30022"
   })
 })
 // focus out
 $('.content-4 .nav-tabs:nth-child(1)').on('focusout', function(){
  $(this).css({
    "background-color": "#edf2f4",
    "border-top":"0px"
  })
});

// second tab
$('.content-4 .nav-tabs:nth-child(2)').on('focusin', function(){

  // prevent tab 1 from focus
  $('.content-4 .nav-tabs:nth-child(1)').css({
    "background-color": "#edf2f4",
    "border-top":"0px"
  })

  $(this).css({
    "background-color": "#ffffff",
    "border-top":"3px solid #e30022"
  })
})

// focus out for second tab
$('.content-4 .nav-tabs:nth-child(2)').on('focusout', function(){
  $(this).css({
    "background-color": "#edf2f4",
    "border-top":"0px"
  })
});

// focus in for third tab
$('.content-4 .nav-tabs:nth-child(3)').on('focusin', function(){
// prevent tab 2 from focus
$('.content-4 .nav-tabs:nth-child(2)').css({
  "background-color": "#edf2f4",
  "border-top":"0px"
})

  $(this).css({
    "background-color": "#ffffff",
    "border-top":"3px solid #e30022"
  })
})

// focus out
$('.content-4 .nav-tabs:nth-child(3)').on('focusout', function(){
  $(this).css({
    "background-color": "#edf2f4",
    "border-top":"0px"
  })
});

// focus in for tab 4
$('.content-4 .nav-tabs:nth-child(4)').on('focusin', function(){

  $('.content-4 .nav-tabs:nth-child(3)').css({
    "background-color": "#edf2f4",
    "border-top":"0px"
  })
  
    $(this).css({
      "background-color": "#ffffff",
      "border-top":"3px solid #e30022"
    })
  })
  
  // focus out
  $('.content-4 .nav-tabs:nth-child(4)').on('focusout', function(){
    $(this).css({
      "background-color": "#edf2f4",
      "border-top":"0px"
    })
  });


  // form validation
  function validateEmail($email){
    var emailReg= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email)
  }

  $('#email').on('focusout', function(){

    if($(this).val() != ""){

        if(validateEmail($(this).val())){
          $(this).css('border', '1px solid green');
          $('#error').text('');
        }else{
          $(this).css('border', '1px solid red');
          $('#error').text('Invalid Email Address');
        }
    }else{
      $(this).css('border', '1px solid red');
      $('#error').text('Email Is Required');
    }

  })

  $('#comment').on('focusout', function(){

    if($(this).val() != ""){
      $(this).css('border','1px solid green');
      $('#error').text('');

    }else{
      $(this).css('border','1px solid red');
      $('#error').text("Message Required");
    }

  });

  $('#name,#subject').on('focusout', function(){
    if($(this).val() != ""){
      $(this).css('border','1px solid green');
    }else{
      $(this).css('border','rgb(212,212,212)');
    }
  });



  // sticky navigation
  $(window).scroll(function(){
    if($(document).scrollTop() > 20){
      $('nav').addClass('fixed-top').addClass('sticky')
    }else{
      $('nav').removeClass('fixed-top').removeClass('sticky')
    }
  })

  // navigation link
  $('.nav-item #home').on('click', function(){
     
    $('html,body').animate({scrollTop : 0 }, 1000);

  });

  $('.nav-item #feature').on('click',function(){
    $('html, body').animate({scrollTop : 450 }, 1000);
  });

  $('.nav-item #pricing').on('click',function(){
    $('html, body').animate({scrollTop : 1470 }, 1000);
  });
  



});