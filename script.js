
// $("nav").hide();

$(document).ready(function() {

  // window size ----------------------
  const $window = $(window);
  const $header = $("#header");
  let W = $window.width();
  let H = $window.height();
  let hH = $header.height();

  $window.resize(()=>{
    W = $window.width();
    H = $window.height();
    hH = $header.height();
  }); // window size --------------------




  slider(); // -----------

  menuColor() // ------------

  openMenu(); // --------
 
  scrollTo(); // --------

  map();  // ------------
  
}); // ready -----------------



function slider(){  // ------------------------------

  let $slider = $(".slider");

  setInterval(function(){

    $slider.animate({"right":"800px"},1000);
    
    setTimeout(function(){
      $slider.css("right","0");
      $(".el:first").appendTo(".slider");
    }, 1100);

  },4000);

} // slider ---------------------------------------


function menuColor(){ // -------------------------

  const $window = $(window);
  const $header = $("#header");
  let hH = $header.height();
  // dark fields
  const df1 = hH;
  const df2 = hH + 1600;
  const df3 = hH + 3200;

  $window.scroll(()=>{

    let mbp = pageYOffset + 30; // menu button position

    if((mbp>df1&&mbp<df1+800)||(mbp>df2&&mbp<df2+800)||(mbp>df3&&mbp<df3+800)){
      $(".menuBtnBar").addClass("darkField");
    }
    else{
      $(".menuBtnBar").removeClass("darkField");
    }



  });

} // menuColor ------------------------------------


function openMenu(){  // --------------------------

  const $menuBtn = $(".menuBtn");
  const $nav = $("nav");

  $menuBtn.click(()=>{

    if($menuBtn.hasClass("active")){
      $menuBtn.removeClass("active");
      $nav.removeClass("active");
      $menuBtn.addClass("deactive");
      $nav.addClass("deactive");
    }
    else{
      $menuBtn.removeClass("deactive");
      $nav.removeClass("deactive");
      $menuBtn.addClass("active");
      $nav.addClass("active");
    }
  });

} // open menu --------------------------------------


function scrollTo(){  // ---------------------------

  const $navi = $('.navi');
  const $menuBtn = $(".menuBtn");
  const $nav = $("nav");
    
  $navi.click(function(e){

    if(!$(this).hasClass("logo")){
      $menuBtn.removeClass("active");
      $nav.removeClass("active");
      $menuBtn.addClass("deactive");
      $nav.addClass("deactive");
    }
     
    let _href = $(this).attr("href");
    e.preventDefault();
     
    $('html, body').animate({
      scrollTop: $(_href).offset().top
    } ,800);

    location.hash = _href;
     
  });

} // scroll to ----------------------------------



function map(){ // --------------------------------
      
  $('.map').goMap({
    latitude : 52.2230863,
    longitude : 20.9850418,
    zoom : 16,
    scaleControl : true,
    maptype : 'ROADMAP'
  }); // goMap

  $.goMap.createMarker({  
     latitude : 52.223214,
     longitude :  20.984970,
     title : 'Tu jesteśmy',
     html : {
     popup : true   
     } // createMarker
  }); 

} // map function --------------------------