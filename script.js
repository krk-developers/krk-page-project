
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


  // open menu ----------------------------
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
  }); // open menu ------------------------



  map();
  
}); // ready -----------------




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