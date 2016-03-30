myApp.config(function($stateProvider,$urlRouterProvider){
   $urlRouterProvider.otherwise('/clientInfo'); 
    
    $stateProvider.state('clientInfo', {
						url : '/clientInfo',
						templateUrl : 'template/clientInfo.html',
                        controller:'clientInfoCtrl'
					})
    .state('appInfo', {
						url : '/appInfo',
						templateUrl : 'template/appInfo.html',
                        controller:'appInfoController'
					})
    
    .state('targetAudience', {
						url : '/targetAudience',
						templateUrl : 'template/targetAudience.html',
                        controller:'targetAudience'
					})
    
     .state('colorPalette', {
						url : '/colorPalette',
						templateUrl : 'template/colorPalette.html',
                        controller:'colorPaletteController'
					})
    
     .state('referenceWebsite', {
						url : '/referenceWebsite',
						templateUrl : 'template/referenceSite.html',
                        controller:'referenceSiteController'
					})
    .state('logoPreference', {
						url : '/logoPreference',
						templateUrl : 'template/logo.html',
                        controller:'logoController'
					})
    
})


