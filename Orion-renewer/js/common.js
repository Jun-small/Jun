$(document).ready(function(){
    mainVisual();
    contentSelect();



})

function mainVisual(){
    $('.main-visual').slick({
        arrows:true,
        dots:true, 
        dotsClass :'visual-dot',
        
        responsive : [{
            breakpoint : '481',
            settings : {
                arrows:false,
            }
        }]
    })
}
function contentSelect(){
    var $tabmenu = $('.items>div.bg').children().eq(0).find('a');
    var $panelList = $('.items-wrapper').children();

    $tabmenu.eq(0).parent().addClass('on');
    $panelList.hide();
    $panelList.eq(0).show();

    $tabmenu.on('click focus',onMenuOver)
    function onMenuOver(){
        var $clickMenu = $tabmenu.index($(this));
        console.log($clickMenu)
        
        $tabmenu.parent().removeClass('on');
        $tabmenu.eq($clickMenu).parent().addClass('on');

        $panelList.hide();
        $panelList.eq($clickMenu).show();
    }
}