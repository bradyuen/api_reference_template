$("aside big").click(function(){
  $("aside li").removeClass("selected purple");
  $("aside li a").removeClass("purple");
  var parent_li = $(this).parent();
  $(parent_li).addClass("selected purple");
  var id = $(this).attr("goto");
  console.log(id);
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#"+id).offset().top
  }, 250);
});

$("aside li a").click(function(){
  $("aside li, aside li a").removeClass("purple");
  $(this).addClass("purple");
  var id = $(this).attr("goto");
  console.log(id);
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#"+id).offset().top
  }, 250);
});


$("#menu_toggle").click(function(){
  if($(this).hasClass("on")){
    $(this).removeClass("on");
    $(".api_template aside").removeClass("on");
  }else{
    $(this).addClass("on");
    $(".api_template aside").addClass("on");
  }
});

$(".layout-develop article").click(function(){
  $("#menu_toggle, .api_template aside").removeClass("on");
});
