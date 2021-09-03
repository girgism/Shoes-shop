$('.head').height($(window).height());
var visited=false;
$('.head').width($(window).width());
$('.showimg').height($(window).height());
$('.showimg').width($(window).width());
$(window).resize(function () {
   'use stict';
    $('.head').height($(window).height());
    $('.head').width($(window).width());
});


$('ul li a').click(function(){
   $('li a.active').toggleClass('active');
    $(this).toggleClass('active');
});

function movesmizing(thewantedid){
    $('html').animate({
        scrollTop:$(thewantedid).offset().top-20
    },2000);
    
}


$('.image ,.koko').on('mouseenter mouseleave',function(e){
  $(this).children('.over').fadeToggle('fast');
});
//imagehere

$('.ourteam .right .image').click(function(){
     var src=$(this).css('background-image');
   
    $('.imagehere').css('background-image',src);
    $('.showimg').css('transform','scale(1)');
     console.log(src);
});
$('.showimg').click(function(){
    $('.showimg').css('transform','scale(0)');
});

$('.port ul li').click(function(){
   $('.port ul .active').toggleClass('active');
   $(this).toggleClass('active');
});


var numclasses=$('.testmoia .theopacity .slider div').length;
var thecurentone=0;

////////////////////////////////////////////////////////////////////////////////////
var containerEl = document.querySelector('.container');
            var mixer = mixitup(containerEl, {
                animation: {
                    animateResizeContainer: false // required to prevent column algorithm bug
                }
            });
////////////////////////////////////////////////////////////////////////

function repeate(){
    thecurentone=thenextone(numclasses,thecurentone);
    $('.testmoia .theopacity .slider .active').delay(1000).fadeOut(1000,function(){
        $(this).removeClass('active').css('display','none');
        $('.testmoia .theopacity .slider div:eq('+thecurentone+')').addClass('active').css('display','block');;
        repeate();
    });
    
}

repeate();

function thenextone(all,curen){
    return (curen+1)%all;
}
$(window).scroll(function(){
  if($(this).scrollTop()>=200){
      $('.navpar').css({
          backgroundColor:'#222',
          padding:'10px',
          margin:'0',
          height:'80px'
      });

  } 
    else{
      $('.navpar').css('background','none');
      $('.navpar').css('height','100px');
      $('.navpar').css('padding','0');
      $('.navpar').css('margin-top','-10px');
    }
});


function counterrun(){
    var speed=50;
    var arr=[0,0,0,0];
    var lastcount=0;
    
    var inter = setInterval(function(){
        for(i=0;i<=3;i++){
            
          arr[i] = $('.counter .ke h1:nth("'+i+'")').data('counter')/40 + arr[i];
        $('.counter .ke h1:nth("'+i+'")').text(Math.ceil(arr[i]));
            
        }
        lastcount++;
        if(lastcount>=40){clearInterval(inter);return;}
    },speed);
}


$(window).scroll(function(){
   if($(this).scrollTop()>=2950 && visited==false){
       counterrun();
       visited=true;
   }
});



