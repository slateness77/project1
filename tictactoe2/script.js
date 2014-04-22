function TictactoeController($scope) {
	$scope.board= [" ", " "," ", " "," ", " "," ", " ", " "];

	$scope.clicker = function (cellIndex) {
		if ($scope.player === true) {
		$scope.board[cellIndex]= 'X';
		}
		else {
			$scope.board[cellIndex]= 'O';
		}
		$scope.winFunction();
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
	 
	 $scope.winCondition = [[0,1,2], [3,4,5], [6, 7, 8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

	 $scope.winFunction = function() {
	 	if (($scope.board[0] === "X") && ($scope.board[1] === "X") && ($scope.board[2] === "X") ){
	 		console.log("X wins");}
	 			else if (($scope.board[3] === "X") && ($scope.board[4] === "X") && ($scope.board[5] === "X") ) {
	 			console.log("X Wins");}
	 			else if (($scope.board[6] === "X") && ($scope.board[7] === "X") && ($scope.board[8] === "X") ) {
	 			console.log("X Wins");}
	 			else if (($scope.board[0] === "X") && ($scope.board[3] === "X") && ($scope.board[6] === "X") ) {
	 			console.log("X Wins");}
	 			else if (($scope.board[1] === "X") && ($scope.board[4] === "X") && ($scope.board[7] === "X") ) {
	 			console.log("X Wins");}
	 			else if (($scope.board[2] === "X") && ($scope.board[5] === "X") && ($scope.board[8] === "X") ) {
	 			console.log("X Wins");}
	 			else if (($scope.board[0] === "X") && ($scope.board[4] === "X") && ($scope.board[8] === "X") ) {
	 			console.log("X Wins");}
	 			else if (($scope.board[2] === "X") && ($scope.board[4] === "X") && ($scope.board[6] === "X") ) {
	 			console.log("X Wins");}



	 			else if (($scope.board[0] === "O") && ($scope.board[1] === "O") && ($scope.board[2] === "O") ) {
	 			console.log("O Wins");}
	 			else if (($scope.board[3] === "O") && ($scope.board[4] === "O") && ($scope.board[5] === "O") ) {
	 			console.log("O Wins");}
	 			else if (($scope.board[6] === "O") && ($scope.board[7] === "O") && ($scope.board[8] === "O") ) {
	 			console.log("O Wins");}
	 			else if (($scope.board[0] === "O") && ($scope.board[3] === "O") && ($scope.board[6] === "O") ) {
	 			console.log("O Wins");}
	 			else if (($scope.board[1] === "O") && ($scope.board[4] === "O") && ($scope.board[7] === "O") ) {
	 			console.log("O Wins");}
	 			else if (($scope.board[2] === "O") && ($scope.board[5] === "O") && ($scope.board[8] === "O") ) {
	 			console.log("O Wins");}
	 			else if (($scope.board[0] === "O") && ($scope.board[4] === "O") && ($scope.board[8] === "O") ) {
	 			console.log("O Wins");}
	 			else if (($scope.board[2] === "O") && ($scope.board[4] === "O") && ($scope.board[6] === "O") ) {
	 			console.log("O Wins");}


	 			$scope.xcell = function(index) {
	 				return ($scope.board[index] === 'X');
	 			};

	 			$scope.ocell = function(index) {
	 				return ($scope.board[index] === 'O');
	 			};

	 		
	 	
	 	// else {
	 	// 	$scope.change();
	 	}
	 };




	


