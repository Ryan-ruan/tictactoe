



var myClicks = 0;   //inital the clicks
var score1= 0;
var score2= 0;
var scoreTie=0;
var currentPlayer = 'x';// inital the player!!
var modeAIOn = false; // to indicate whether AI mode is on
var gameOver = false;

var game = {
  clicks: '',
  x: {
    moves: [],
    score: 0,
    image: '',
  },
  o: {
    moves: [],
    score: 0,
    image: '',
  }
};

// game.x.moves
// game['x'].moves
// game[ currentPlayer ].moves

var newGame = function(){
    x =[];
    o =[];
    $('td').text("");
    $("#banner").text("");
    currentPlayer === 'x';
    gameOver = false;
    modeAIOn = false;
    myClicks = 0;
    score1= 0;
    score2= 0;
    scoreTie=0;
};

// var moveToMake = computerAI();
// $('#' + moveToMake).text(currentPlayer);

var computerAI =function(){
  if ($('#5').text()==='') {
    $('#5').text(currentPlayer);
  } else if ($('#1').text()==='') {
    $('#1').text(currentPlayer);
  } else if  ($('#3').text()==='') {   // if (board[3] === null
    $('#3').text(currentPlayer);
    // return 3;
  } else if  ($('#7').text()==='') {
    $('#7').text(currentPlayer);
  } else if  ($('#9').text()==='') {
    $('#9').text(currentPlayer);
  } else if  ($('#2').text()==='') {
    $('#2').text(currentPlayer);
  } else if  ($('#4').text()==='') {
    $('#4').text(currentPlayer);
  } else if  ($('#6').text()==='') {
    $('#6').text(currentPlayer);
  } else if  ($('#8').text()==='') {
    $('#8').text(currentPlayer);
  } else if  ($('#10').text()==='') {
    $('#10').text(currentPlayer);
    } else if  ($('#11').text()==='') {
    $('#10').text(currentPlayer);
  } else if  ($('#12').text()==='') {
    $('#12').text(currentPlayer);
  }
  currentPlayer = "x";
};



$(document).ready(function(){
  var x = [];
  var o = [];

  // var moves = ['x', null, null, null, 'o', null, null, null, null, ];

  // moves = [
  //   [0,1,2],
  //   [3,4,5],
  //   [6,7,8]
  // ];
  //
  // moves[i][j]

  var shortWinner = function( player ){

    // var moves = game[ player ].moves;
    var moves;
    if( player === 'x'){
      moves = x;
    } else {
      moves = o;
    }

    if (
      // moves[1] === player
      (moves.includes('1') && moves.includes('2') && moves.includes('3')) ||
      (moves.includes('4') && moves.includes('5') && moves.includes('6')) ||
      (moves.includes('7') && moves.includes('8') && moves.includes('9')) ||
      (moves.includes('1') && moves.includes('4') && moves.includes('7')) ||
      (moves.includes('2') && moves.includes('5') && moves.includes('8')) ||
      (moves.includes('3') && moves.includes('6') && moves.includes('9')) ||
      (moves.includes('1') && moves.includes('5') && moves.includes('9')) ||
      (moves.includes('3') && moves.includes('5') && moves.includes('7'))) {

        gameOver = true;

        if( player === 'x'){
          score1 += 1;
          // $('.score' + player  )  // '.scorex' and '.scoreo'
          $(".score1").text(score1);
        } else {
          // player 'o'
          score2 += 1;
          $(".score2").text(score1);
        }

        $('#tableOne').addClass('disappear')
        $('#popDiv').show();
        $('.whoWins').text( player.toUpperCase() + " is the winner");
        $("#banner").text("Game Over");

        return true;
    }

    if (myClicks === 9) {
      scoreTie+=1;
      $(".scoreTie").text(scoreTie);
      $('.whoWins').text("It's a tie");
    }

    return false;
  };

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
        $('.whoWins').text("X is the winner");
        $("#banner").text("Game Over");
        if (myClicks === 9) {
          scoreTie+=1;
          $(".scoreTie").text(scoreTie);
          $('.whoWins').text("It's a tie");
        }

    }

    if(
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
          $('.whoWins').text("o is the winner");
          $("#banner").text("Game Over");
          if (myClicks === 9) {
            scoreTie+=1;
            $(".scoreTie").text(scoreTie);
            $("#banner").text("It's a tie");
          }
      }
    };


//game start
    $("td").on('click',function(){
      // debugger;
      if(modeAIOn) {
        return;
      }

      if( gameOver ){
        return;
      }
      if($(this).text()) {
        $("#banner").text("Oops,someone already there!");
      } else {
        myClicks += 1;
        console.log('clicks', myClicks);


        if ( currentPlayer === 'x') {
          x.push(this.id);
          shortWinner( currentPlayer );  // check for winner!

          currentPlayer = 'o';
          console.log(x);
          $(this).text('x');
          $("#banner").text("O is the next");
          // winner(this);

        } else if ( currentPlayer === 'o') {
          o.push(this.id);
          shortWinner( currentPlayer );  // check for winner!

          currentPlayer = 'x';
          console.log(o);
          $(this).text('o');
          $("#banner").text("X is the next");
          // winner(this);

        }

    }

  });

  //=====================AI MODE IS ON!!!!!!!===============

  $("td").on('click',function(){

    if(!modeAIOn) {
      return;
    }

    if( gameOver ){
      return;
    }

    if($(this).text()) {
      $("#banner").text("Oops,someone already there!");
    } else {
      myClicks += 1;
      console.log('clicks', myClicks);



      if ( currentPlayer === 'x') {

        x.push(this.id);
        shortWinner( currentPlayer );

        currentPlayer = 'o';  // switch player
        console.log(x);
        $(this).text('x');
        $("#banner").text("O is the next");
        // winner(this);

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
