$(document).ready(function() {

  // window size ----------------------
  const $window = $(window);
  //const $header = $("#header");
  let W = $window.width();
  //let H = $window.height();
  //let hH = $header.height();

  // $window.resize(()=>{
  //   W = $window.width();
  //   H = $window.height();
  //   hH = $header.height();
  // }); // window size --------------------

  formSend(); // ---------------

  slider(W); // -----------

  menuColor() // ------------

  openMenu(); // --------
 
  scrollTo(); // --------

  map();  // ------------
  
}); // ready -----------------


function formSend(){  // ------------------------

  const formError = $(".form-error");

  $("input.button").on("click", function(event){
    
    event.preventDefault();

    let name = $(".name").val();
    let email = $(".email").val();
    let content = $(".textarea").val();
    let valid = true;

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    formError.text("");

    // sprawdzenie poprawności -----------------
    if(name==""){ 
      formError.append("Musisz podać imię.<br>");
      valid = false;
     }
    if(email==""){
      formError.append("Musisz podać adres email.<br>");
      valid = false;
    }
    else if(!emailRegex.test(email)){
      formError.append("Niepoprawny adres email.<br>");
      valid = false;
    }
    if(content==""){
      formError.append("Musisz wpisać wiadomość.");
      valid = false;
    } // sprawdzenie poprawności ----------------

    // zapytanie do serwera ------------------
    if(valid){

      let XHR = new XMLHttpRequest();
      
      XHR.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            formError.text(this.responseText);
            console.log(this.responseText);
        }
      }

      XHR.open("POST", "contact.php", true);
      XHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      XHR.send("name="+name+"&email="+email+"&content="+content);

    } // zapytanie do serwera ----------------

  }); // submit click -------------------------

} // formSend --------------------------------------


function slider(W){  // ------------------------------

  let $slider = $(".slider");
  let slide;

  if(W > 840){ slide = "800px"; }
  else if(W <= 840 && W > 641){ slide = "600px"; }
  else if(W <= 640 && W > 441){ slide = "400px"; }
  else if(W <= 440){ slide = "300px"; }

  setInterval(function(){

    $slider.animate({"right":slide},1000);
    
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
 
  const about = $('#about').position().top;
  const section2 = $('#section2').position().top;
  const offer = $('#offer').position().top;
  const partners = $('#partners').position().top;
  const contect = $('#contact').position().top;
  
  $window.scroll(()=>{

    let mbp = pageYOffset + 30; // menu button position

    if((mbp>about&&mbp<section2)||(mbp>offer&&mbp<partners)||(mbp>contect)){
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

    if($menuBtn.hasClass("active")){
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