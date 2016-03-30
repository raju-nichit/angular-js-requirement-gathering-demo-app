myApp.controller('targetAudience',function($scope,$rootScope){
    
    $rootScope.headerName="Target Info";
    
    
    $scope.activeTab = 1;
				
				$scope.setActiveTab = function(tabToSet) {
					$scope.activeTab = tabToSet;
				}
			
});