var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    
    $scope.one= "";
    $scope.two= "";
    $scope.three= "";
    $scope.four= "";
    $scope.five= "";
    $scope.six= "";
    $scope.seven= "";
    $scope.eight= "";
    $scope.nine= "";
    $scope.result = ""
    $scope.firstPlayer = true;
    $scope.player1 = 0;
    $scope.player2 = 0;

    $scope.continueGame = function() {
        $scope.one= "";
        $scope.two= "";
        $scope.three= "";
        $scope.four= "";
        $scope.five= "";
        $scope.six= "";
        $scope.seven= "";
        $scope.eight= "";
        $scope.nine= "";
        $scope.result = ""
        $scope.firstPlayer = true;
    };

    $scope.resetGame = function() {
        $scope.one= "";
        $scope.two= "";
        $scope.three= "";
        $scope.four= "";
        $scope.five= "";
        $scope.six= "";
        $scope.seven= "";
        $scope.eight= "";
        $scope.nine= "";
        $scope.result = ""
        $scope.firstPlayer = true;
        $scope.player1 = 0;
        $scope.player2 = 0;
    };

    $scope.Clicked = function(boxNo, flag) {
        if($scope.result === "") {
            if($scope.one === '' && boxNo === 'one') {
                if(flag) {
                    $scope.one = 'X';  
                } else {
                    $scope.one = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }
            if($scope.two === '' && boxNo === 'two') {
                if(flag) {
                    $scope.two = 'X';  
                } else {
                    $scope.two = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }
            if($scope.three === '' && boxNo === 'three') {
                if(flag) {
                    $scope.three = 'X';  
                } else {
                    $scope.three = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }
            if($scope.four === '' && boxNo === 'four') {
                if(flag) {
                    $scope.four = 'X';  
                } else {
                    $scope.four = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }
            if($scope.five === '' && boxNo === 'five') {
                if(flag) {
                    $scope.five = 'X';  
                } else {
                    $scope.five = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }
            if($scope.six === '' && boxNo === 'six') {
                if(flag) {
                    $scope.six = 'X';  
                } else {
                    $scope.six = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }
            if($scope.seven === '' && boxNo === 'seven') {
                if(flag) {
                    $scope.seven = 'X';  
                } else {
                    $scope.seven = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }
            if($scope.eight === '' && boxNo === 'eight') {
                if(flag) {
                    $scope.eight = 'X';  
                } else {
                    $scope.eight = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }
            if($scope.nine === '' && boxNo === 'nine') {
                if(flag) {
                    $scope.nine = 'X';  
                } else {
                    $scope.nine = 'O';  
                }
                $scope.firstPlayer = !$scope.firstPlayer
            }  

            if(($scope.one === 'X' && $scope.two === "X" && $scope.three === "X") || 
            ($scope.four === 'X' && $scope.five === "X" && $scope.six === "X") || 
            ($scope.seven === 'X' && $scope.eight === "X" && $scope.nine === "X") || 
            ($scope.one === 'X' && $scope.four === "X" && $scope.seven === "X") || 
            ($scope.two === 'X' && $scope.five === "X" && $scope.eight === "X") || 
            ($scope.one === 'X' && $scope.five === "X" && $scope.nine === "X") || 
            ($scope.three === 'X' && $scope.five === "X" && $scope.seven === "X")){
                $scope.result= "Player One - (X) won the match";
                $scope.player1 = $scope.player1 + 1;
            } 
            else if(($scope.one === 'O' && $scope.two === "O" && $scope.three === "O") ||
            ($scope.four === 'O' && $scope.five === "O" && $scope.six === "O") ||
            ($scope.seven === 'O' && $scope.eight === "O" && $scope.nine === "O") ||
            ($scope.one === 'O' && $scope.four === "O" && $scope.seven === "O") ||
            ($scope.two === 'O' && $scope.five === "O" && $scope.eight === "O") ||
            ($scope.one === 'O' && $scope.five === "O" && $scope.nine === "O") ||
            ($scope.three === 'O' && $scope.five === "O" && $scope.seven === "O")) {                
                $scope.result= "Player Two - (O) won the match";
                $scope.player2 = $scope.player2 + 1;
            } 

            if($scope.one !== '' && $scope.two !== '' && $scope.three !== '' &&
            $scope.four !== '' && $scope.five !== '' && $scope.six !== '' &&
            $scope.seven !== '' && $scope.eight !== '' && $scope.nine !== '' &&
            $scope.result === '') {
                $scope.result = "Match Drawn, Please continue Game!"
            }
        }            
    };
});