$(document).ready(function() {


  // ----- MAP -----------------------------
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
  // ----- MAP -------------------------------
  
  }); // ready -----------------