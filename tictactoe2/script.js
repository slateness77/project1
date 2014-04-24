function TictactoeController($scope) {
	$scope.board= [" ", " "," ", " "," ", " "," ", " ", " "];

	var gameStatus = true;
	var audio = new Audio('img/messageBoxHit.wav');
// ^^ makes audio work
	$scope.clicker = function (cellIndex) {
		audio.play();
// ^^ runs the audio
		if (gameStatus == true) {

			if ($scope.board[cellIndex] === " ") {
// ^^ it makes it so if the board is blank it puts x or o, if it is not blank it goes to end.

		if ($scope.player === true) {
		$scope.board[cellIndex]= 'X';
		}
		else {
			$scope.board[cellIndex]= 'O';
		}

		$scope.xcell = function(index) {
	 				return ($scope.board[index] === 'X');
	 			};

	 			$scope.ocell = function(index) {
	 				return ($scope.board[index] === 'O');
	 			};

	 			





		$scope.winFunction();


	}
}	
	};


	 $scope.player = true;

	 $scope.change = function() {
	 	if ($scope.player === true) {
	 		$scope.player = false;

	 	}
	 	else {
	 		$scope.player = true;
	 	}
	 };
	 var message = "";

			var showMessage = function () {
				document.getElementById('result').style.display = 'block';
				document.getElementById('result').innerHTML = message;
			};
	 
	 // $scope.winCondition = [[0,1,2], [3,4,5], [6, 7, 8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

	 $scope.winFunction = function() {

		var j = 0;
		for (var i=0; i<$scope.board.length; i++) {
			if ($scope.board[i] === " ") {
				j++;
			}
		}
		if (j === 0) {
			gameStatus = false;
	 			message = "Cats Game";
	 			showMessage();
		}

	 			else if (($scope.board[0] === "X") && ($scope.board[1] === "X") && ($scope.board[2] === "X") ){
	 			gameStatus = false;
	 			message = "x wins";
	 			showMessage();}
	 			else if (($scope.board[3] === "X") && ($scope.board[4] === "X") && ($scope.board[5] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			showMessage();}
	 			else if (($scope.board[6] === "X") && ($scope.board[7] === "X") && ($scope.board[8] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			showMessage();}
	 			else if (($scope.board[0] === "X") && ($scope.board[3] === "X") && ($scope.board[6] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			showMessage();}
	 			else if (($scope.board[1] === "X") && ($scope.board[4] === "X") && ($scope.board[7] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			showMessage();}
	 			else if (($scope.board[2] === "X") && ($scope.board[5] === "X") && ($scope.board[8] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			showMessage();}
	 			else if (($scope.board[0] === "X") && ($scope.board[4] === "X") && ($scope.board[8] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			showMessage();}
	 			else if (($scope.board[2] === "X") && ($scope.board[4] === "X") && ($scope.board[6] === "X") ) {
	 				gameStatus = false;
	 			message = "x wins";
	 			showMessage();}



	 			else if (($scope.board[0] === "O") && ($scope.board[1] === "O") && ($scope.board[2] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			showMessage();}
	 			else if (($scope.board[3] === "O") && ($scope.board[4] === "O") && ($scope.board[5] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			showMessage();}
	 			else if (($scope.board[6] === "O") && ($scope.board[7] === "O") && ($scope.board[8] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			showMessage();}
	 			else if (($scope.board[0] === "O") && ($scope.board[3] === "O") && ($scope.board[6] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			showMessage();}
	 			else if (($scope.board[1] === "O") && ($scope.board[4] === "O") && ($scope.board[7] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			showMessage();}
	 			else if (($scope.board[2] === "O") && ($scope.board[5] === "O") && ($scope.board[8] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			showMessage();}
	 			else if (($scope.board[0] === "O") && ($scope.board[4] === "O") && ($scope.board[8] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			showMessage();}
	 			else if (($scope.board[2] === "O") && ($scope.board[4] === "O") && ($scope.board[6] === "O") ) {
	 				gameStatus = false;
	 			message = "o wins";
	 			showMessage();}


			$scope.change();


			// var message = "";

			// var showMessage = function () {
			// 	document.getElementById('result').style.display = 'block';
			// 	document.getElementById('result').innerHTML = message;
			// };
			

	 	}
	 };




	


