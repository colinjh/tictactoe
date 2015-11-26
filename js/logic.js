// [1][2][3]
// [4][5][6]
// [7][8][9]

//Players		
var x = 'X';
var o = 'O';
var currentPlayer = 'X';
var gameWinner = false;

var xMove = [];
var oMove = [];

var xScore = 0;
var oScore = 0;

var moveCount = 0;
var draws = 0;

var tictactoe = {
		
	swapPlayer: function(){
		if (currentPlayer === 'X'){
			currentPlayer = 'O';
		}else if (currentPlayer === 'O'){
			currentPlayer = 'X'
		}	
	},

	playerMove: function(move){
		if (currentPlayer){
			$(move).html(currentPlayer);
			moveCount ++;
		}
	},
	recordScore: function(move){
		var id = $(move).attr('id');
	if (currentPlayer === 'X') {
		xMove.push(id)
	}else if (currentPlayer === 'O'){
		oMove.push(id)
	}	
	},
	xWinner: function() {
		console.log('Winner X');
		$('p.winner').text('Winner X');
		xScore ++;
		$('p.scoreX').text('X Score:' +xScore);
		gameWinner = true;
		tictactoe.resetBoard();

	},
	oWinner: function() {
		console.log('Winner O');
		$('p.winner').text('Winner O');
		oScore ++;
		$('p.scoreO').text('O Score:' +oScore);
		gameWinner = true;
		tictactoe.resetBoard();	
	
	},
	validMove: function( $clickedElement ) {
		return $clickedElement.text() === "";
	},
	draw: function(){
		if (moveCount === 9){
			tictactoe.resetBoard;
			draws++;
			$('p.draw').text('Draws:' +draws);
			
		}
	},

	resetBoard: function() {
		// $('button').on('click', function(){
			if ( gameWinner ) {
				xMove = [];
				oMove = [];
				moveCount = 0;
				gameWinner = false;
				$('p.winner').text('');
				$('.square').empty();
			
			}
		// });
		
	},
	gameWinner: function(){
		var x1 = xMove.indexOf('1');
		var x2 = xMove.indexOf('2'); 
		var x3 = xMove.indexOf('3'); 
		var x4 = xMove.indexOf('4'); 
		var x5 = xMove.indexOf('5'); 
		var x6 = xMove.indexOf('6'); 
		var x7 = xMove.indexOf('7'); 
		var x8 = xMove.indexOf('8'); 
		var x9 = xMove.indexOf('9');
		var o1 = oMove.indexOf('1');
		var o2 = oMove.indexOf('2'); 
		var o3 = oMove.indexOf('3'); 
		var o4 = oMove.indexOf('4'); 
		var o5 = oMove.indexOf('5'); 
		var o6 = oMove.indexOf('6'); 
		var o7 = oMove.indexOf('7'); 
		var o8 = oMove.indexOf('8'); 
		var o9 = oMove.indexOf('9');
	if ((x1 >= 0) && (x2 >= 0) && (x3 >= 0)){
		tictactoe.xWinner();
	}else if ((x4 >= 0) && (x5 >= 0) && (x6 >= 0)){
		tictactoe.xWinner();
	}else if ((x7 >= 0) && (x8 >= 0) && (x9 >= 0)){
		tictactoe.xWinner();
	}else if ((x1 >= 0) && (x4 >= 0) && (x7 >= 0)){
		tictactoe.xWinner();
	}else if ((x2 >= 0) && (x5 >= 0) && (x8 >= 0)){
		tictactoe.xWinner();
	}else if ((x3 >= 0) && (x6 >= 0) && (x9 >= 0)){
		tictactoe.xWinner();
	}else if ((x1 >= 0) && (x5 >= 0) && (x9 >= 0)){
		tictactoe.xWinner();
	}else if ((x3 >= 0) && (x5 >= 0) && (x7 >= 0)){
		tictactoe.xWinner();
	}else if ((o1 >= 0) && (o2 >= 0) && (o3 >= 0)){
		tictactoe.oWinner();
	}else if ((o4 >= 0) && (o5 >= 0) && (o6 >= 0)){
		tictactoe.oWinner();
	}else if ((o7 >= 0) && (o8 >= 0) && (o9 >= 0)){
		tictactoe.oWinner();
	}else if ((o1 >= 0) && (o4 >= 0) && (o7 >= 0)){
		tictactoe.oWinner();
	}else if ((o2 >= 0) && (o5 >= 0) && (o8 >= 0)){
		tictactoe.oWinner();
	}else if ((o3 >= 0) && (o6 >= 0) && (o9 >= 0)){
		tictactoe.oWinner();
	}else if ((o1 >= 0) && (o5 >= 0) && (o9 >= 0)){
		tictactoe.oWinner();
	}else if ((o3 >= 0) && (o5 >= 0) && (o7 >= 0)){
		tictactoe.oWinner();
	}
		return true;

	}	

};

$(document).ready(function() { 
	$('.square').on('click', function(){
		console.log('this is working');
		if ( tictactoe.validMove( $(this) ) ) {
			tictactoe.playerMove(this);
			tictactoe.recordScore(this);
			tictactoe.gameWinner();
			var gameWon = tictactoe.gameWinner();
			if ( !gameWon ) { tictactoe.draw() };
			tictactoe.draw();
			tictactoe.swapPlayer();
		} else {
			alert("Not Valid Move");
		}

	});

	$('button').on('click', function(){
		tictactoe.resetBoard();
	});
});


	