myApp.controller('colorPaletteController',function($scope,$rootScope){
    
    $rootScope.headerName="Color Palette";
     
    $scope.activeTab = 1;
				
				$scope.setActiveTab = function(tabToSet) {
					$scope.activeTab = tabToSet;
				}
})