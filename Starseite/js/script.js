window.onload = function() {
  var mpoints = document.getElementsByClassName("menu_point");
  for (i = 0; i < mpoints.length; i++) {
    mpoints[i].addEventListener("click", switching, false);
  }

  function switching() {
    $( this ).parent().find( 'li.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    if($( this ).is("#gallery")){
      $(".gallery").show();
        $(".equipment").hide();
    }
    else{
      $(".equipment").show();
      $(".gallery").hide();
    }
  };
};
