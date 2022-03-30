$(document).ready(function(){
  headerScroll();  
  Menu();
  visualSlider();
  curtain();
  languige();
  itemSlider();
  itemSelector();
  
  cultureSelector();
  cultureSlider();
  cooperation();

  imgChange();

  

})
function headerScroll(){
    $(window).on('scroll resize',onScroll)

    function onScroll(){
      var $scrollH = $(window).scrollTop();
      var $headerB = $('.header-bottom-wrapper')
      var $headerT = $('.header-top')
      var $logo = $('.header-bottom-wrapper img')

      


      if($scrollH > 700){
        $headerT.addClass('on')        
        $headerB.addClass('on')
        $logo.css({'display':'block'})


        $headerB.css({'top':0})
      }else{
        $headerT.removeClass('on')        
        $headerB.removeClass('on')
        $logo.css({'display':'none'})

        $headerB.css({'top':100})

      }
      
        
        
    }
}
function Menu(){
  var $mainMenu = $('.gnb>ul>li>a')
  var $subMenu = $('.submenu-list')
  var $subBg = $('.sub-bg')

  $mainMenu.on('mouseenter focus',MenuDrop)
  $('.header-bottom-wrapper>div').on('mouseleave',MenuUp)

  $subMenu.slideUp(0)
  $subBg.slideUp(0)

  function MenuDrop(){
    $subMenu.slideDown(300)
    $subBg.slideDown(300)
    $('.gnb').addClass('on')
    $('.header-bottom-wrapper>div').css({'backgroundColor':'#333333'})
  }
  function MenuUp(){
    $subMenu.slideUp(0)
    $subBg.slideUp(0)
    $('.gnb').removeClass('on')
    $('.header-bottom-wrapper>div').css({'backgroundColor':'black'})
  }
}
function visualSlider(){
  // var $isPlay = true;

  $('.visual').slick({
    arrows : true,
    dots : true,
    appendDots : $('.dot-slide'),
    prevArrow : '<button class="prev-btn"><span class="ir-wa">이전 슬라이드 보기</span></button>',
    nextArrow : '<button class="next-btn"><span class="ir-wa">다음 슬라이드 보기</span></button>',
  })
}
function curtain(){
  var $image = $('.poster')
  var $blind = false;
  var $imgHeight = $('.poster').innerHeight();
  console.log($imgHeight)

  $image.on('mouseenter focus',onCurtain)
  $('.curtain').on('mouseleave',offCurtain)

  function onCurtain(){
    $('.curtain').css({'display':'block','height':$imgHeight})
  }
  function offCurtain(){
    $('.curtain').css({'display':'none'})
  }
}

function languige(){

  var $languigeBtn = $('.languige>span')
  var $open = false;
  var $languigeBox = $('div.lang-wrapper ul')

  // $languigeBox.stop().animate({'opacity':0},500)

  $languigeBtn.on('click focus',onLanguige)
  

  function onLanguige(){
   var $isMenu = $(this).parent().next().is(':hidden')
   
   $languigeBox.stop().animate({'top':4,'scroll-top':0},10)
   

   
   

   
   $languigeBox.css({'display':'block'})
   if($isMenu){
    $languigeBox.slideUp(10)
    $languigeBox.slideDown(10)
    $languigeBox.css({'display':'block'})
    
    $('.lang-wrapper').on('mouseleave',function(){
      $languigeBox.slideUp(10)  
    })

   }else{
    $languigeBox.slideUp(30)
   }
  }
}

function itemSlider(){
  $('.item-wrapper').slick({
    arrows:true,
    prevArrow:'<button class="movie-prev-btn"><span class="ir-wa">이전 영화 보기</span></button>',
    nextArrow:'<button class="movie-next-btn"><span class="ir-wa">다음 영화 보기</span></button>',
    centerMode:false,
  })

  
}
function itemSelector(){
  var $trailer = $('.movie-selection-btn').children().eq(0).children();
  var $stealCut = $('.movie-selection-btn').children().eq(1).children();

  $trailer.on('click focus',movieOn)
  $stealCut.on('click focus',photoOn)

  function movieOn(){
    $trailer.addClass('selected')
    $stealCut.removeClass('selected')    
    $('.steal-cut').css({'display':'none'})
    $('.movie').css({'display':'block'})    
    
  }
  function photoOn(){
    $trailer.removeClass('selected')
    $stealCut.addClass('selected')
    $('.movie').css({'display':'none'})    
    $('.steal-cut').css({'display':'block'})
  
    }
  }
function cultureSelector(){
  var $fourdx = $('#fourdx')
  var $imax = $('#imax')

  $fourdx.on('click',function(){
    $('article.imax').css({'display':"none"})
    $('article.fourDX').css({'display':"block"})
  })
  $imax.on('click',function(){
    $('article.imax').css({'display':"block"})
    $('article.fourDX').css({'display':"none"})
  })


}
function cultureSlider(){
  $('.cultureplex-wrap').slick({
    dots:false,
    slidesToShow:4,
    slidesToScroll:1,
    nextArrow:"<button class='culture-next-btn'></button>",
    prevArrow:"<button class='culture-prev-btn'></button>",
    infinite : false,
  })
}
function cooperation(){
  var $cooperationBtn = $('.footer-bottom-wrapper button span')

  $cooperationBtn.on('click focus',onCooperation)
  

  function onCooperation(){
   var $isMenu = $(this).parent().next().is(':hidden')
   var $cooperationBox = $('.footer-bottom-wrapper ul')
   
   $cooperationBox.stop().animate({'scroll-top':0},30)
   
   

   $cooperationBox.css({'display':'block'})
   if($isMenu){
    $cooperationBox.slideUp(10)
    $cooperationBox.slideDown(10)
    $cooperationBox.css({'display':'block'})

    
    $('.coop-btn-wrapper').on('mouseleave',function(){
      $cooperationBox.slideUp(10)  
    })

   }else{
    $cooperationBox.slideUp(10)
   }
  }
}
function imgChange(){
  var $stealCutList = $('.steal-cut')
  var $grayLayer = $('.grayLayer');
  var $overLayer = $('.overLayer')

  var $stealCutImg = $('.steal-cut').find('a')
  

  $stealCutImg.on('click',modalOn)
  $grayLayer.on('click',modalOff)

  function modalOn(){
    var $itemAttr = $(this).find('img').attr('src')
    var $modalImg = $('<img src='+($itemAttr)+'>')
    // console.log($itemAttr)    

    $grayLayer.appendTo($('body'))
    $overLayer.appendTo($('body'))
    
    $grayLayer.show();
    $grayLayer.stop().animate({'opacity':1,'display':'block'},500)
    $overLayer.show();
    $overLayer.stop().animate({'opacity':1,'display':'block'},500)
    
    $overLayer.html($modalImg);
  }

  function modalOff(){
    $grayLayer.hide();
    $grayLayer.stop().animate({'opacity':1,'display':'block'},500)
    $overLayer.hide();

  }

  
}