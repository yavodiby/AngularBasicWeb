var app = angular.module("Disweb", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
     $routeProvider.
        when('/main', {
         templateUrl: 'views/main.html',
         controller: 'MainCtrl'
     }).when('/about', {
         templateUrl: 'views/about.html',
         controller: 'MainCtrl'
     }).when('/services', {
         templateUrl: 'views/services.html',
         controller: 'ServicesCtrl'
     }).when('/contact', {
         templateUrl: 'views/contact.html',
         controller: 'ContactCtrl'
     }).
        otherwise({
         redirectTo:'/main'  
     })
        
}])
.controller('MainCtrl', function($scope){
   
})
.controller('ServicesCtrl', function($scope, $http){
    $http.get('shared/services.json').then(function(response){
        $scope.services = response.data;
        console.log(response.data);
    })
   
})
.controller('ContactCtrl', function($scope, $http){
    $http.get('/shared/contacts.json').then(function(response){
        $scope.contacts = response.data;
    })
   
});
