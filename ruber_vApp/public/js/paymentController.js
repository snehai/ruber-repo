var paymentApp = angular.module('payment', ['ui.bootstrap']);

paymentApp.controller('PaymentCtrl', ['$scope', '$http',
  function ($scope, $http) {
	
	$scope.tabs = [
	               { title:'Credit Card', content:'Dynamic content 1' },
	               { title:'Paypal', content:'Dynamic content 2'}
	             ];
	
	
    /*$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';*/
  }]);