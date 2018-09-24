(function() {

  /*  divs animation */

  var w = $(window).width();
  var h = w < 768 ? 80 : 260;
  var h_max = w < 768 ? 100 : 300;

  var w1=w*.1;
  var w2=w*.5;
  var w3=w/2;
  var w4=w-w*.5;
  var w5=w-w*.1;

  var h1 = h_max;

  var c = [];
  var c2 = [];

  var x = 0;
  $(".animate-line2").each(function(){
    var id=$(this).attr('id');
    var color=$(this).data('color');

    var paper = Raphael(id, w, h_max);
    paper.setViewBox(0, 0, w, h_max );
    var h1 = h_max;
    c[x] = paper.path("M0,"+h_max+" 0,"+(h_max-h)+" C"+w1+","+h1+" "+w2+","+h_max+" "+w3+","+h_max+" C"+w4+","+h_max+" "+w5+","+h1+" "+w+","+(h_max-h)+" L"+w+","+h_max+" Z").attr({'fill':'#'+color, 'stroke': 'none'});

    x++;
  });

  $(window).scroll(function(){
    var x = 0;
    $(".animate-line2").each(function(){
      var top = $(this).offset().top;

      var w_height = $(window).height();
      var h_height = w_height / 2;
      var s_top = $(window).scrollTop();

      if(top < s_top + w_height && top + w_height > s_top + w_height){
        var acti = top - s_top;
        var k = Math.abs(acti / w_height);
        h_max2 = h_max * k;

        c[x].animate({ 'path': "M0,"+h_max+" 0,"+(h_max-h_max2)+" C"+w1+","+h1+" "+w2+","+h_max+" "+w3+","+h_max+" C"+w4+","+h_max+" "+w5+","+h1+" "+w+","+(h_max-h_max2)+" L"+w+","+h_max+" Z"}, 0);
      }

      x++;
    });

  });
 
  var x = 0;
  $(".animate-line").each(function(){
    // var h_max = 300;
   
    // if( w < 1120 && w > 768 ) {
    //   var h_max = 260;
    // } else if( w < 550 ) {
    //   var h_max = 120;
    // }
    //  alert(h_max);
    // heightMax();
    
    

    var id=$(this).attr('id');
    var color=$(this).data('color');
    var paper = Raphael(id, w, h_max);
    paper.setViewBox(0, 0, w, h_max );
    var h1 = h_max;
    c2[x] = paper.path("M0,0 0,0 C"+w1+","+h1+" "+w2+","+h_max+" "+w3+","+h_max+" C"+w4+","+h_max+" "+w5+","+h1+" "+w+",0 L"+w+",0  Z").attr({'fill':'#'+color, 'stroke': 'none'});

    x++;
  });

  $(window).scroll(function(){
    var x = 0;
    $(".animate-line").each(function(){
      var top = $(this).offset().top;

      var w_height = $(window).height();
      var h_height = w_height / 2;
      var s_top = $(window).scrollTop()-300;
      
      // var h_max = 300;
   
      // if( w < 1120 && w > 768 ) {
      //   var h_max = 260;
      // } else if( w < 550 ) {
      //   var h_max = 120;
      // }
      // heightMax();

      if(top < s_top + w_height && top + w_height > s_top + w_height){
        var acti = top - s_top;
        var k = Math.abs(acti / w_height);
        h_max2 = h_max * k;

        c2[x].animate({ 'path': "M0,0 L0,"+(h_max-h_max2)+" C"+w1+","+h_max+" "+w2+","+h_max+" "+w3+","+h_max+" C"+w4+","+h_max+" "+w5+","+h_max+" "+w+","+(h_max-h_max2)+" L"+w+",0 Z"}, 0);
      }

      x++;
    });

  });


  $(document).ready(function(){
    var w_block = $('#line4').width();
    $('#line4 svg').removeAttr('width');
    $('#line4 svg').css({
      'width': w_block + 'px',
      // 'height': $('#line4').height() + 'px'
    });
  });

  $(window).resize(function(){
    var w_block = $('#line4').width();
    $('#line4 svg').css({
      'width': w_block + 'px',
      // 'height': $('#line4').height() + 'px'
    });
  });



  function heightMax() {
    $(window).resize(function(){
      var w = $(window).width();
      var h_max = 300;
      if( w < 1120 && w > 768 ) {
        h_max = 260;
      } else if( w < 550 ) {
        h_max = 120;
      }
    }
  }

  /*/  divs animation */
})();