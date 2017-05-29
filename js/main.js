$(document).ready(function(){
  var x = [];
  var o = [];


      var clicks = 0;   //inital the clicks
    $("td").on('click',function(){

      var clicks = function(){
        clicks +=1;
      };

      if (! clicks % 2 === 0) {
      }
      x.push(this.id);
      console.log(x);
      if ( clicks % 2 === 0) {
      o.push(this.id)
      }
      console.log(o);


  });



});
