// Ìí¼Ó·þÎñ
app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                        .when('/',{templateUrl:'view/index.html'})
                        .when('/information',{templateUrl:'view/information.html'})
                        .when('/introduce',{templateUrl:'view/introduce.html'})
                        .otherwise({redirectTo:'/'});
            }]);