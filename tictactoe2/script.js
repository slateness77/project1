var yoshiApp = angular.module('yoshiApp', ["firebase"]);
yoshiApp.controller('TictactoeController', function ($scope, $firebase, $timeout) {
	var ticTacRef= new Firebase("https://yoshitactoe.firebaseio.com/games");


	var gameStatus = true;
	var audio = new Audio('img/messageBoxHit.wav');
// ^^ makes audio work

// fire base
var lastGame;
			// Ask for all existing game info from firebase
			ticTacRef.once('value', function(gamesSnapshot) {
				// get the actual games data
			  var games = gamesSnapshot.val();
				if(games == null)
				{
					// No games at all, so make a new game -- As if we're Areg
					lastGame = ticTacRef.push( {waiting: true} );
					playerNum = 1;
				}
				else	// I do have at least one game out there...
				{
				  var keys = Object.keys(games);
				  var lastGameKey = keys[ keys.length - 1 ];
				  var lastGame = games[ lastGameKey ];
					console.log("This person's game: " + lastGameKey);
				  if(lastGame.waiting)
				  {
				  	// Currently someone is waiting -- Areg is there and we're Rocky
				  	// Grab from Firebase its last game object
				  	lastGame = ticTacRef.child(lastGameKey);
				  	// Set a new game on this
				  	lastGame.set( {waiting:false, playerTurn: 0, won: false, board: [" ", " "," ", " "," ", " "," ", " ", " "], player: true} );
				  	playerNum = 2; 
				  }
				  else
				  {
				  	// Make a new game -- As if we're Areg
						lastGame = ticTacRef.push( {waiting: true} );
						playerNum = 1;
				  }
				}
				// Attach the last game to what we're up to
			  $scope.game = $firebase(lastGame);
			});

			  // copy paste fire base ^^
	$scope.clicker = function (cellIndex) {
		audio.play();
// ^^ runs the audio
		if (gameStatus == true) {

			if ($scope.game.board[cellIndex] === " ") {
// ^^ it makes it so if the board is blank it puts x or o, if it is not blank it goes to end.

		if ($scope.game.player === true && playerNum == 1) {
		$scope.game.board[cellIndex]= 'X';
		$scope.change();
		}
		else if ($scope.game.player == false && playerNum == 2) {
			$scope.game.board[cellIndex]= 'O';
			$scope.change();
		}

		


		$scope.xcell = function(index) {
	 				return ($scope.game.board[index] === 'X');
	 			};

	 			$scope.ocell = function(index) {
	 				return ($scope.game.board[index] === 'O');
	 			};







		$scope.winFunction();


	}
}	
		$scope.game.$save();
	};



	 // $scope.game.player = true;

	 $scope.change = function() {
	 	if ($scope.game.player === true) {
	 		$scope.game.player = false;

	 	}
	 	else {
	 		$scope.game.player = true;
	 	}
	 };
	var message = "";
	 // $scope.xscore=0;
	 // $scope.oscore=0;

			var showMessage = function () {
				document.getElementById('result').style.display = 'block';
				document.getElementById('result').innerHTML = message;
				// showScore(message);
			};
	
		
	 
	 // $scope.winCondition = [[0,1,2], [3,4,5], [6, 7, 8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

	 $scope.winFunction = function() {

		var j = 0;
		for (var i=0; i<$scope.game.board.length; i++) {
			if ($scope.game.board[i] === " ") {
				j++;
			}
		}
		if (j === 0) {
			gameStatus = false;
	 			message = "Cats Game";
	 			showMessage();
	 			reset();
		}

	 			else if (($scope.game.board[0] === "X") && ($scope.game.board[1] === "X") && ($scope.game.board[2] === "X") ){
	 			gameStatus = false;
	 			message = "x wins";
	 			$scope.xscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[3] === "X") && ($scope.game.board[4] === "X") && ($scope.game.board[5] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			$scope.xscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[6] === "X") && ($scope.game.board[7] === "X") && ($scope.game.board[8] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			$scope.xscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[0] === "X") && ($scope.game.board[3] === "X") && ($scope.game.board[6] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			$scope.xscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[1] === "X") && ($scope.game.board[4] === "X") && ($scope.game.board[7] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			$scope.xscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[2] === "X") && ($scope.game.board[5] === "X") && ($scope.game.board[8] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			$scope.xscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[0] === "X") && ($scope.game.board[4] === "X") && ($scope.game.board[8] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			$scope.xscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[2] === "X") && ($scope.game.board[4] === "X") && ($scope.game.board[6] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			$scope.xscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}



	 			else if (($scope.game.board[0] === "O") && ($scope.game.board[1] === "O") && ($scope.game.board[2] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			$scope.oscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[3] === "O") && ($scope.game.board[4] === "O") && ($scope.game.board[5] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			$scope.oscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[6] === "O") && ($scope.game.board[7] === "O") && ($scope.game.board[8] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			$scope.oscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[0] === "O") && ($scope.game.board[3] === "O") && ($scope.game.board[6] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			$scope.oscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[1] === "O") && ($scope.game.board[4] === "O") && ($scope.game.board[7] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			$scope.oscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[2] === "O") && ($scope.game.board[5] === "O") && ($scope.game.board[8] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			$scope.oscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[0] === "O") && ($scope.game.board[4] === "O") && ($scope.game.board[8] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			$scope.oscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);}
	 			else if (($scope.game.board[2] === "O") && ($scope.game.board[4] === "O") && ($scope.game.board[6] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			$scope.oscore++;
	 			showMessage()
	 			$timeout(function(){reset()}, 5000);};
	 		


			// $scope.change();

			function reset() {
				$scope.gameStatus = true;
				$scope.game.board = [" ", " "," ", " "," ", " "," ", " ", " "];
				message = " ";
				$scope.game.player = true;
				document.getElementById('result').innerHTML = message;
				document.getElementById('result').style.display = "none";

			};


			// var message = "";

			// var showMessage = function () {
			// 	document.getElementById('result').style.display = 'block';
			// 	document.getElementById('result').innerHTML = message;
			// };
			

	 	}

	 
	});




	


