
$("nav").hide();

$(document).ready(function() {

  // window size ----------------------
  const $window = $(window);
  let W = $window.width();
  let H = $window.height();

  $window.resize(()=>{
    W = $window.width();
    H = $window.height();
  }); // window size --------------------





  slider();

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


function openMenu(){  // --------------------------

  const $menuBtn = $(".menuBtn");
  const $nav = $("nav");
  const $upperBar = $(".upperBar");

  $menuBtn.click(()=>{

    if($menuBtn.hasClass("active")){
      $menuBtn.removeClass("active");
      $nav.slideUp(300);
      setTimeout(() => {
        $upperBar.removeClass("active");
      }, 300);
    }
    else{
      $upperBar.addClass("active");
      $menuBtn.addClass("active");
      $nav.slideDown(300);
    }
  });

} // open menu --------------------------------------


function scrollTo(){  // ---------------------------

 const $navi = $('.navi');
    
 $navi.click(function(e){
     
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