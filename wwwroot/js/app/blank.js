(function() {

    var app = new Vue({
        "el": "#divVue",
        "methods": {
            showMessage: function(info) {
                alert(this.message + "===" + info);
            }
        },
        "data": {
            "showhtml": false,
            "message": "hello vue",
            "list": [{
                "username": "张三",
                "id": 100
            }, {
                "username": "李四",
                "id": 200
            }],
            "selList": 200
        }
    });


    var myApp = angular.module("myApp", []);
    myApp.controller("MyCtrl", ["$scope", function($scope) {
        $scope.data = {
            "showhtml": false,
            "message": "hello angular",
            "list": [{
                "username": "张三",
                "id": 100
            }, {
                "username": "李四",
                "id": 200
            }],
            "selList": 200
        };

        $scope.showMessage = function(info) {
            alert($scope.data.message + "===" + info);
        };

    }]);

})();