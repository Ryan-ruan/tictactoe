var myClicks = 0;   //inital the clicks

var currentPlayer = 'x';// inital the player!!

var modeAIOn = false; // to indicate whether AI mode is on


var gameOver = false;

var newGame = function(){
    x =[];
    o =[];
    $('td').text("");
    currentPlayer === 'x';
    gameOver = false;
    modeAIOn = false;
    myClicks = 0;
    score1= 0;
    score2= 0;
    scoreTie=0;
};

var computerAI =function(){
  if ($('#5').text()==='') {
    $('#5').text(currentPlayer);
  } else if ($('#1').text()==='') {
    $('#1').text(currentPlayer);
  } else if  ($('#2').text()==='') {
    $('#2').text(currentPlayer);
  } else if  ($('#3').text()==='') {
    $('#3').text(currentPlayer);
  } else if  ($('#4').text()==='') {
    $('#4').text(currentPlayer);
  } else if  ($('#6').text()==='') {
    $('#6').text(currentPlayer);
  } else if  ($('#7').text()==='') {
    $('#7').text(currentPlayer);
  } else if  ($('#8').text()==='') {
    $('#8').text(currentPlayer);
  } else if  ($('#9').text()==='') {
    $('#9').text(currentPlayer);
  } else if  ($('#10').text()==='') {
    $('#10').text(currentPlayer);
    } else if  ($('#11').text()==='') {
    $('#10').text(currentPlayer);
  } else if  ($('#12').text()==='') {
    $('#12').text(currentPlayer);
  }
  currentPlayer = "x";
};

  var score1= 0;
  var score2= 0;
  var scoreTie=0;

$(document).ready(function(){
  var x = [];
  var o = [];

  // from stackoverflow
  // $("#tableOne").on(
  //     "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
  //     function() {
  //         $(this).removeClass("animated flipInX");//deli
  //         $(this).removeClass("animated slideInUp");
  //     }
  // );

  var winner = function(){
    if (
      (x.includes('1') && x.includes('2') && x.includes('3'))||
      (x.includes('4') && x.includes('5') && x.includes('6'))||
      (x.includes('7') && x.includes('8') && x.includes('9'))||
      (x.includes('1') && x.includes('4') && x.includes('7'))||
      (x.includes('2') && x.includes('5') && x.includes('8'))||
      (x.includes('3') && x.includes('6') && x.includes('9'))||
      (x.includes('1') && x.includes('5') && x.includes('9'))||
      (x.includes('3') && x.includes('5') && x.includes('7'))){
        $('#tableOne').addClass('disappear')
        gameOver = true;
        score1+=1;
        $(".score1").text(score1);
        $('#popDiv').show();
        $("#banner").text("Game Over");
        if (myClicks === 8) {
          scoreTie+=1;
          $(".scoreTie").text(scoreTie);
        }

    } if(
      (o.includes('1') && o.includes('2') && o.includes('3'))||
      (o.includes('4') && o.includes('5') && o.includes('6'))||
      (o.includes('7') && o.includes('8') && o.includes('9'))||
      (o.includes('1') && o.includes('4') && o.includes('7'))||
      (o.includes('2') && o.includes('5') && o.includes('8'))||
      (o.includes('3') && o.includes('6') && o.includes('9'))||
      (o.includes('1') && o.includes('5') && o.includes('9'))||
      (o.includes('3') && o.includes('5') && o.includes('7'))) {
        $('#tableOne').addClass('disappear')
        gameOver = true;
        score2+=1;
          $(".score2").text(score2);
          $('#popDiv').show();
          $("#banner").text("Game Over");
          if (myClicks === 8) {
            scoreTie+=1;
            $(".scoreTie").text(scoreTie);
          }
      }
    };


//game start
    $("td").on('click',function(){
      debugger;
      if(modeAIOn) {
        return;
      }

      if( gameOver ){
        return;
      }
      if(!$(this).text("")) {
        $("#banner").text("Oops,someone already there!");
        debugger;
      } else {
        myClicks += 1;
        console.log('clicks', myClicks);

        if ( currentPlayer === 'x') {
          x.push(this.id);
          currentPlayer = 'o';
          console.log(x);
          $(this).text('x');
          $("#banner").text("O is the next");
          winner(this);

        }
        else if ( currentPlayer === 'o') {
          o.push(this.id);
          currentPlayer = 'x';
          console.log(o);
          $(this).text('o');
          $("#banner").text("X is the next");
          winner(this);
        }

    }

  });  // 1gameover full of chess alert 2AI

  //=====================AI MODE IS ON!!!!!!!===============

  $("td").on('click',function(){

    if(!modeAIOn) {
      return;
    }

    if( gameOver ){
      return;
    }

    if(!$(this).text("")) {
      $("#banner").text("Oops,someone already there!");
    } else {
      myClicks += 1;
      console.log('clicks', myClicks);

      if ( currentPlayer === 'x') {
        x.push(this.id);
        currentPlayer = 'o';
        console.log(x);
        $(this).text('x');
        $("#banner").text("O is the next");
        winner(this);
        computerAI();

      }

  }

  });

  $("#restart").on('click',function(){
    newGame();
  });//restart a new game



  $("#playerSwitch").on("click",function(){

    $( ".playerAI" ).toggle();
    $( ".playerAI1" ).toggle();
    newGame();

    modeAIOn = !modeAIOn
  });//player2/or AI


  $("#table4x4").on("click",function(){
    $("table").toggle();
    $(".swift2").toggle();
    newGame();
  });//change table


$("#swiftXO").on("click",function(){
  $(".currentPlayer").toggle()
  newGame();
  x =[];
  o =[];
  if ( currentPlayer === 'x') {
    currentPlayer = 'o';
  } else {
    currentPlayer = 'x';
  }
});//change x/o





});//doc ready
